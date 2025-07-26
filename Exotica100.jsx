// File location: components/EX/Exotica100.jsx
import React from 'react';

export default function Exotica100() {
  const deployAll = () => console.log('💥 All systems GO.');
  const shutdownAll = () => console.log('⛔ Master Shutdown Initiated');

  return (
    <div className="p-6 bg-gradient-to-br from-black via-slate-800 to-purple-950 text-white rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-bold mb-4">👑 EXOTICA 100 — System Core</h1>
      <p className="mb-4">100 integrated modules online.</p>
      <div className="flex flex-col gap-3">
        <button className="bg-green-600 py-2 px-4 rounded" onClick={deployAll}>
          🔓 Activate All Modules
        </button>
        <button className="bg-red-700 py-2 px-4 rounded" onClick={shutdownAll}>
          ⛔ Global Shutdown
        </button>
      </div>
      <p className="mt-6 text-sm text-slate-400">System integrity: ✅ 100%</p>
    </div>
  );
}
