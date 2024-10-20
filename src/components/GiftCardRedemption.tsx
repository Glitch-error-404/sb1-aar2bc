import React from 'react';
import { Gift } from 'lucide-react';

const GiftCardRedemption: React.FC = () => {
  const giftCards = [
    { brand: 'Amazon', value: '$10', points: 1000 },
    { brand: 'Starbucks', value: '$5', points: 500 },
    { brand: 'Target', value: '$20', points: 2000 },
    { brand: 'Best Buy', value: '$25', points: 2500 },
  ];

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
        <Gift className="w-6 h-6 mr-2" />
        Gift Card Redemption
      </h2>
      <p className="mb-6 text-gray-600">
        Redeem your hard-earned points for gift cards from your favorite brands!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {giftCards.map((card, index) => (
          <div key={index} className="border rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{card.brand}</h3>
              <p className="text-gray-600">{card.value} Gift Card</p>
            </div>
            <button className="btn btn-primary">
              Redeem ({card.points} pts)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCardRedemption;