// File location: components/Misc/SelfUpgrade.jsx
import React, { useState } from 'react';
import useExoticaCore from '@/hooks/useExoticaCore';

export default function SelfUpgrade() {
  const { applyCodePatch, installUpgrade, viewCurrentVersion } = useExoticaCore();
  const [patchCode, setPatchCode] = useState('');

  return (
    <div className="p-4 bg-zinc-950 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center">Self Upgrade System</h1>
      <p className="text-center text-sm text-zinc-400">Exotica AI evolves itself on command.</p>
      <textarea
        className="w-full p-2 mt-3 bg-zinc-800 rounded"
        placeholder="Paste code patch or upgrade JSON"
        value={patchCode}
        onChange={(e) => setPatchCode(e.target.value)}
      />
      <div className="flex justify-center mt-3 space-x-2">
        <button className="btn" onClick={() => applyCodePatch(patchCode)}>Apply Patch</button>
        <button className="btn" onClick={installUpgrade}>Install Upgrade</button>
        <button className="btn" onClick={viewCurrentVersion}>Check Version</button>
      </div>
    </div>
  );
}
