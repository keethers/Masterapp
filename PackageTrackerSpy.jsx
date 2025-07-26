// File location: components/Misc/PackageTrackerSpy.jsx
import React, { useState, useEffect } from 'react';
import usePackageIntel from '@/hooks/usePackageIntel';

export default function PackageTrackerSpy() {
  const [packages, setPackages] = useState([]);
  const { fetchTrackingData } = usePackageIntel();

  useEffect(() => {
    fetchTrackingData().then(setPackages);
  }, []);

  return (
    <div className="p-4 bg-indigo-950 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">📦 Package Spy Tracker</h1>
      <ul className="text-sm max-h-64 overflow-y-scroll space-y-1">
        {packages.map((pkg, i) => (
          <li key={i} className="border-b border-indigo-800 pb-1">
            {pkg.user} ordered <strong>{pkg.item}</strong> — Status: {pkg.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
