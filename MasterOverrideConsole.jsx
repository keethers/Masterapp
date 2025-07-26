// File location: components/Misc/MasterOverrideConsole.jsx
export default function MasterOverrideConsole() {
  const authorize = () => {
    console.log('🔐 Master Override Authorized');
    // Could call secure backend route or smart contract trigger
  };

  return (
    <div className="p-4 bg-red-900 text-white rounded-xl border-2 border-yellow-500">
      <h2 className="text-xl font-bold mb-2">🔑 Master Override Console</h2>
      <p className="mb-3">⚠️ Root-only command panel for emergency lockdowns.</p>
      <button onClick={authorize} className="bg-yellow-600 px-4 py-2 rounded">Activate Override</button>
    </div>
  );
}
