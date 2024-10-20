import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Droplet, Trophy, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-800">Welcome, {userData.name || currentUser?.email}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/calculator" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Droplet className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Water Usage</h2>
          <p className="text-gray-600">Track and calculate your daily water usage.</p>
        </Link>
        
        <Link to="/leaderboard" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Trophy className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
          <p className="text-gray-600">See how you rank among other water savers.</p>
        </Link>
        
        <Link to="/rewards" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Gift className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Rewards</h2>
          <p className="text-gray-600">Redeem your points for exciting rewards.</p>
        </Link>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Your Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Water Saved</p>
            <p className="text-2xl font-bold text-blue-600">{userData.totalWaterSaved || 0} L</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Current Streak</p>
            <p className="text-2xl font-bold text-blue-600">{userData.currentStreak || 0} days</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Points</p>
            <p className="text-2xl font-bold text-blue-600">{userData.totalPoints || 0}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Rank</p>
            <p className="text-2xl font-bold text-blue-600">#{userData.rank || '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;