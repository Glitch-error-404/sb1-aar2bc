import React from 'react';
import { User, Droplet, Award } from 'lucide-react';

const UserProfile: React.FC = () => {
  const user = {
    name: 'John Doe',
    points: 850,
    waterSaved: 1200,
    competitions: 5,
    achievements: ['Water Saver', 'Eco Warrior', 'Community Champion'],
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <User className="w-16 h-16 text-blue-500 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-blue-600">{user.name}</h2>
          <p className="text-gray-600">Water Conservation Enthusiast</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-500">{user.points}</p>
          <p className="text-sm text-gray-600">Total Points</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-500">{user.waterSaved}</p>
          <p className="text-sm text-gray-600">Liters Saved</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-500">{user.competitions}</p>
          <p className="text-sm text-gray-600">Competitions</p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Award className="w-5 h-5 mr-2" />
          Achievements
        </h3>
        <ul className="list-disc list-inside">
          {user.achievements.map((achievement, index) => (
            <li key={index} className="text-gray-700">{achievement}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Droplet className="w-5 h-5 mr-2" />
          Monthly Goal Progress
        </h3>
        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-blue-500 h-full rounded-full"
            style={{ width: `${(user.points / 1000) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {user.points}/1000 points - {((user.points / 1000) * 100).toFixed(1)}% to next gift card
        </p>
      </div>
    </div>
  );
};

export default UserProfile;