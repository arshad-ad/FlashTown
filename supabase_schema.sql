-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES (Extends Supabase Auth)
-- Create a table for public profiles using triggers to keep it in sync with auth.users
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  full_name text,
  phone text,
  role text check (role in ('admin', 'owner', 'user')) default 'user',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Trigger to create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. SHOPS
create table shops (
  id uuid default uuid_generate_v4() primary key,
  owner_id uuid references profiles(id) on delete set null not null, -- Must have an owner
  name text not null,
  slug text unique not null,
  town text not null, -- Normalized town name (e.g., 'Manjeri')
  category text not null,
  description text,
  address text,
  phone text,
  logo_url text,
  verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. OFFERS
create table offers (
  id uuid default uuid_generate_v4() primary key,
  shop_id uuid references shops(id) on delete cascade not null,
  title text not null,
  description text,
  discount_percent integer,
  offer_price numeric,
  original_price numeric,
  image_url text,
  start_date timestamp with time zone default timezone('utc'::text, now()),
  expiry_date timestamp with time zone not null,
  is_featured boolean default false,
  status text check (status in ('active', 'pending', 'rejected', 'expired')) default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. RLS POLICIES (STRICT)
alter table profiles enable row level security;
alter table shops enable row level security;
alter table offers enable row level security;

-- Profiles
create policy "Public profiles are viewable by everyone" on profiles for select using (true);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);

-- Shops
create policy "Verified shops are viewable by everyone" on shops for select using (verified = true);
create policy "Owners can view own shop (even if unverified)" on shops for select using (auth.uid() = owner_id);
create policy "Owners can insert their own shop" on shops for insert with check (auth.uid() = owner_id);
create policy "Owners can update their own shop" on shops for update using (auth.uid() = owner_id);

-- Offers
create policy "Active offers are viewable by everyone" on offers for select using (status = 'active' and expiry_date > now());
create policy "Owners can view all their offers" on offers for select using (
  exists (select 1 from shops where shops.id = offers.shop_id and shops.owner_id = auth.uid())
);
create policy "Owners can insert offers for their shop" on offers for insert with check (
  exists (select 1 from shops where shops.id = shop_id and shops.owner_id = auth.uid())
);
create policy "Owners can update offers for their shop" on offers for update using (
  exists (select 1 from shops where shops.id = shop_id and shops.owner_id = auth.uid())
);
create policy "Owners can delete offers for their shop" on offers for delete using (
  exists (select 1 from shops where shops.id = shop_id and shops.owner_id = auth.uid())
);

-- 5. INDEXES
create index idx_shops_town on shops(town);
create index idx_shops_category on shops(category);
create index idx_offers_shop_id on offers(shop_id);
create index idx_offers_expiry on offers(expiry_date);
-- Full text search index
create index idx_offers_fts on offers using gin(to_tsvector('english', title || ' ' || description));

-- 6. STORAGE (Buckets)
-- This usually needs to be done in Supabase UI, but SQL can set up policies if buckets exist
-- Assuming bucket 'shop-assets' exists
-- create policy "Public Access" on storage.objects for select using (bucket_id = 'shop-assets');
-- create policy "Owner Upload" on storage.objects for insert with check (bucket_id = 'shop-assets' and auth.uid()::text = (storage.foldername(name))[1]);
