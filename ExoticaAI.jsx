// File location: components/EX/ExoticaAI.jsx
import { useState } from "react";

export default function ExoticaAI() {
  const [response, setResponse] = useState("Ask me anything...");

  const handleClick = () => {
    setResponse("🧠 ExoticaAI is thinking... Profit plans are underway!");
  };

  return (
    <div>
      <button onClick={handleClick} style={{ marginTop: "20px", padding: "10px" }}>
        Activate Exotica
      </button>
      <p style={{ marginTop: "20px" }}>{response}</p>
    </div>
  );
}
