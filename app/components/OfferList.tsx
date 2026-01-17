import OfferCard from './OfferCard';

const DUMMY_OFFERS = [
    {
        id: '1',
        shopName: 'Trends Manjeri',
        title: 'Buy 1 Get 1 Free on all Menswear',
        image: '',
        location: 'Kacheripadi',
        validity: 'Ends Today'
    },
    {
        id: '2',
        shopName: 'Bismi Hypermarket',
        title: '50% Off on Fresh Fruits & Vegetables',
        image: '',
        location: 'Court Road',
        validity: 'Until 9 PM'
    },
    {
        id: '3',
        shopName: 'Oxygen Digital',
        title: 'iPhone 15 @ ₹65,999 -Limited Stock',
        image: '',
        location: 'Bypass Jn',
        validity: 'Valid 2 Days'
    },
    {
        id: '4',
        shopName: 'Malabar Gold',
        title: 'No Making Charges on Diamond Jewellery',
        image: '',
        location: 'Pandikkad Road',
        validity: 'Ends Sunday'
    }
];

export default function OfferList() {
    return (
        <div className="px-4 py-4 max-w-md mx-auto">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Active Offers Near You</h2>

            <div className="flex flex-col gap-3">
                {DUMMY_OFFERS.map((offer) => (
                    <OfferCard key={offer.id} {...offer} />
                ))}
            </div>
        </div>
    );
}
