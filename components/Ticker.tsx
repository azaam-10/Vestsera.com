
import React from 'react';

// Define the structure of coin data for type safety
interface CoinData {
  name: string;
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
}

// Moved CoinItem outside of Ticker to resolve the TypeScript error where 'key' was not expected in the props type.
// Using React.FC automatically includes React-specific props like 'key' in the component definition.
const CoinItem: React.FC<{ coin: CoinData }> = ({ coin }) => (
  <div className="flex items-center px-6 border-r border-gray-800 space-x-3 h-full">
    <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0">
      <img src={`https://picsum.photos/seed/${coin.symbol}/32/32`} className="w-full h-full rounded-full" alt={coin.name} />
    </div>
    <span className="text-blue-400 font-medium">{coin.name}</span>
    <span className="text-gray-500 font-mono text-xs">[{coin.symbol}]</span>
    <span className="text-white font-bold">${coin.price}</span>
    <span className={`text-xs ${coin.positive ? 'text-green-500' : 'text-red-500'}`}>
      {coin.change}
    </span>
  </div>
);

const Ticker: React.FC = () => {
  const coins: CoinData[] = [
    { name: 'Dogecoin', symbol: 'DOGE', price: '0.146', change: '+2.91%', positive: true },
    { name: 'Polkadot', symbol: 'DOT', price: '18.42', change: '-1.12%', positive: false },
    { name: 'Bitcoin', symbol: 'BTC', price: '64,210', change: '+0.45%', positive: true },
    { name: 'Ethereum', symbol: 'ETH', price: '3,420', change: '+1.20%', positive: true },
    { name: 'Cardano', symbol: 'ADA', price: '0.45', change: '-0.30%', positive: false },
  ];

  return (
    <div className="bg-[#111111] border-y border-gray-900 h-14 overflow-hidden flex items-center relative z-20">
      <div className="ticker-scroll flex items-center h-full">
        {/* Repeat list twice for seamless loop */}
        {[...coins, ...coins].map((coin, idx) => (
          // Fix: Using CoinItem with a key prop now correctly matches the React component's expected signature
          <CoinItem key={idx} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Ticker;
