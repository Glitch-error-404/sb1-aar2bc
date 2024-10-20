import React from 'react';
import { Trophy } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const leaderboardData = [
    { name: 'Alice', points: 1200 },
    { name: 'Bob', points: 1100 },
    { name: 'Charlie', points: 1000 },
    { name: 'David', points: 950 },
    { name: 'Eve', points: 900 },
  ];

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
        <Trophy className="w-6 h-6 mr-2" />
        Leaderboard
      </h2>
      <table className="w-full">
        <thead>
          <tr className="bg-blue-100">
            <th className="py-2 px-4 text-left">Rank</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-right">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4 text-right">{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;