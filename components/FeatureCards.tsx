import { WalletIcon, ShoppingBagIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

const FeatureCards = () => {
  const cards = [
    {
      cardType: "Wallets",
      icon: WalletIcon,
      title: "Access a new revenue stream and engage with your users",
      description: "Drive wallet users to our partner merchants, and get fee share revenue while engaging more with your users."
    },
    {
      cardType: "Merchants",
      icon: ShoppingBagIcon,
      title: "Access the growing crypto payments market",
      description: "Tap into the $2 trillion stablecoin economy. Integrate a partner payment gateway and let users pay with stablecoins, securely and friction free."
    },
    {
      cardType: "Payment Gateways",
      icon: ArrowsRightLeftIcon,
      title: "Join a growing ecosystem of wallets and merchants",
      description: "Share the revenue with Wallets, and increase your volumes tapping into an ecosystem of Wallets and Merchants"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#7C3AED] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <div className="text-xs font-semibold uppercase text-[#7C3AED] mb-2 tracking-wider">{card.cardType}</div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards; 