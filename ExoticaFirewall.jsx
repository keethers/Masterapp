// File location: components/EX/ExoticaFirewall.jsx
import React, { useEffect } from 'react';
import useFirewall from '@/hooks/useFirewall';

export default function ExoticaFirewall() {
  const { activateFirewall, blockIP, monitorPortScan } = useFirewall();

  useEffect(() => {
    activateFirewall();
    monitorPortScan();
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-red-300 rounded-lg">
      <h1 className="text-2xl font-bold text-center">🛡️ Exotica Firewall</h1>
      <p className="text-center text-sm text-gray-400">All ports watched. Spoofers blocked. Live defense online.</p>
      <div className="text-center mt-3">
        <button className="btn" onClick={() => blockIP('suspicious-visitor')}>🚫 Block Suspicious IP</button>
      </div>
    </div>
  );
}
