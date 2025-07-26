// File location: components/Misc/LocksmithTools.jsx
import React from 'react';
import useAccessControl from '@/hooks/useAccessControl';

export default function LocksmithTools() {
  const { unlockAllDoors, overrideLocks, logAccessEvent } = useAccessControl();

  return (
    <div className="p-4 bg-gray-900 text-green-300 rounded-lg">
      <h1 className="text-2xl font-bold text-center">Locksmith Access Module</h1>
      <div className="flex flex-col items-center mt-4 space-y-2">
        <button className="btn" onClick={() => unlockAllDoors()}>Unlock All</button>
        <button className="btn" onClick={() => overrideLocks('AdminOverride')}>Override Locks</button>
        <button className="btn" onClick={() => logAccessEvent('Manual Entry')}>Log Entry</button>
      </div>
    </div>
  );
}
