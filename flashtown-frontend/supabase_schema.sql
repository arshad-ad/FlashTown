-- Enable UUID extension
create extension if not exists "uuid-ossp";
create extension if not exists pg_trgm;

-- 1. PROFILES Table
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  phone text,
  created_at timestamp with time zone default now()
);


-- 2. SHOPS Table
create table public.shops (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid references public.profiles(id) on delete cascade,
  name text not null,
  slug text unique not null,
  town text not null,
  category text,
  description text,
  address text,
  phone text,
  logo_url text,
  verified boolean default false,
  created_at timestamp with time zone default now()
);


-- 3. OFFERS Table
create table public.offers (
  id uuid primary key default uuid_generate_v4(),
  shop_id uuid references public.shops(id) on delete cascade,
  title text not null,
  description text,
  discount_percent integer,
  image_url text,
  start_date timestamp with time zone default now(),
  expiry_date timestamp with time zone,
  status text default 'active',
  is_featured boolean default false,
  created_at timestamp with time zone default now()
);
-- INDEXES (IMPORTANT FOR SPEED)
create index idx_shops_town on public.shops(town);
create index idx_shops_slug on public.shops(slug);
create index idx_offers_shop on public.offers(shop_id);
create index idx_offers_expiry on public.offers(expiry_date);

create index idx_offer_search
on public.offers
using gin(to_tsvector('simple', coalesce(title,'') || ' ' || coalesce(description,'')));

-- 🔹 AUTO CREATE PROFILE ON SIGNUP
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();


-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.shops enable row level security;
alter table public.offers enable row level security;

-- 🔐 ENABLE RLS

alter table public.profiles enable row level security;
alter table public.shops enable row level security;
alter table public.offers enable row level security;

-- 🔹 PROFILES POLICIES
create policy "Users can view own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users update own profile"
on public.profiles
for update
using (auth.uid() = id);

-- 🔹 SHOPS POLICIES
-- Public read only verified shops
create policy "Public read verified shops"
on public.shops
for select
using (verified = true);

-- Owner insert
create policy "Owner can insert shop"
on public.shops
for insert
with check (owner_id = auth.uid());

-- Owner update
create policy "Owner update own shop"
on public.shops
for update
using (owner_id = auth.uid());

-- 🔹 OFFERS POLICIES

-- Public read active non-expired offers
create policy "Public read active offers"
on public.offers
for select
using (
  status = 'active'
  and (expiry_date is null or expiry_date > now())
);

-- Owner insert offer only to own shop
create policy "Owner insert offer"
on public.offers
for insert
with check (
  exists (
    select 1 from public.shops
    where shops.id = shop_id
    and shops.owner_id = auth.uid()
  )
);

-- Owner update own offer
create policy "Owner update offer"
on public.offers
for update
using (
  exists (
    select 1 from public.shops
    where shops.id = shop_id
    and shops.owner_id = auth.uid()
  )
);

-- Owner delete own offer
create policy "Owner delete offer"
on public.offers
for delete
using (
  exists (
    select 1 from public.shops
    where shops.id = shop_id
    and shops.owner_id = auth.uid()
  )
);


-- NOTE: Since these policies rely on checking the 'profiles' table for the 'admin' role,
-- you will need to manually insert your first admin profile into the 'profiles' table 
-- directly in the Supabase dashboard (or disable RLS temporarily to seed it).
