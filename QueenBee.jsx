// File location: components/Misc/QueenBee.jsx
import React, { useEffect } from 'react';
import useQueenAI from '@/hooks/useQueenAI';

export default function QueenBee() {
  const { initiateHiveCommands, updateSwarmLogic, broadcastRoyalOverride } = useQueenAI();

  useEffect(() => {
    initiateHiveCommands();
    updateSwarmLogic('agile');
  }, []);

  return (
    <div className="p-4 bg-yellow-800 text-black rounded-xl">
      <h1 className="text-3xl font-extrabold text-center">👑 Queen Bee AI</h1>
      <p className="text-center text-sm text-yellow-200">Primary intelligence node active.</p>
      <div className="text-center mt-4">
        <button onClick={broadcastRoyalOverride} className="btn">Broadcast Override</button>
      </div>
    </div>
  );
}
