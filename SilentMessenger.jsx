// File location: components/Misc/SilentMessenger.jsx
import React, { useState } from 'react';
import useStealthComm from '@/hooks/useStealthComm';

export default function SilentMessenger() {
  const { injectMessage, sendHiddenText, scheduleGhostSMS } = useStealthComm();
  const [target, setTarget] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-lg">
      <h1 className="text-xl font-bold text-center">🕶️ Silent Messenger</h1>
      <div className="flex flex-col gap-2 mt-3">
        <input className="input" placeholder="Target ID or Number" value={target} onChange={(e) => setTarget(e.target.value)} />
        <textarea className="input" placeholder="Enter message…" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button className="btn" onClick={() => injectMessage(target, message)}>Inject Now</button>
        <button className="btn" onClick={() => sendHiddenText(target, message)}>Send Hidden SMS</button>
        <button className="btn" onClick={() => scheduleGhostSMS(target, message)}>Schedule Delivery</button>
      </div>
    </div>
  );
}
