// File location: components/EX/ExoticaTrainingCenter.jsx
import React, { useState } from 'react';
import useTrainer from '@/hooks/useTrainer';

export default function ExoticaTrainingCenter() {
  const { uploadKnowledge, retrainExotica, showKnowledgeBase } = useTrainer();
  const [file, setFile] = useState(null);

  return (
    <div className="p-4 bg-indigo-950 text-white rounded-lg">
      <h1 className="text-xl font-bold text-center mb-2">🧠 Exotica Training Center</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
      <div className="flex flex-col items-center space-y-2">
        <button className="btn" onClick={() => uploadKnowledge(file)}>Upload Docs</button>
        <button className="btn" onClick={retrainExotica}>Retrain Now</button>
        <button className="btn" onClick={showKnowledgeBase}>View Knowledge</button>
      </div>
    </div>
  );
}
