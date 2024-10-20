import React from 'react';
import { Droplet } from 'lucide-react';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
          <Droplet className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Aquaventure</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><button onClick={() => setCurrentPage('calculator')} className="hover:text-blue-200">Calculator</button></li>
            <li><button onClick={() => setCurrentPage('leaderboard')} className="hover:text-blue-200">Leaderboard</button></li>
            <li><button onClick={() => setCurrentPage('profile')} className="hover:text-blue-200">Profile</button></li>
            <li><button onClick={() => setCurrentPage('rewards')} className="hover:text-blue-200">Rewards</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;