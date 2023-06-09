import React, { useState } from "react";
import axios from "axios";

function Comp() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    try {
      const data = { prompt };
      const response = await axios.post(
        "http://localhost:8080/generate-response",
        data
      );
      setResponse(response.data);
    } catch (error) {
      console.error(error);
      setResponse("Error generating response");
    }
  };

  return (
    <div>
      <input
        id="prompt-input"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button id="generate-button" onClick={handleClick}>
        Generate
      </button>
      <div id="response">{response}</div>
    </div>
  );
}

export default Comp;
