import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SpeechRecog = () => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const navigate = useNavigate(); // For navigation

  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  const startListening = () => {
    setListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[event.resultIndex][0].transcript.toLowerCase().trim();
      setTranscript(speechResult);

      // Command Recognition for navigation
      if (speechResult.includes("parents")) {
        navigate("/parents");
      } else if (speechResult.includes("manjunath")) {
        navigate("/manjunath");
      } else if (speechResult.includes("mukesh")) {
        navigate("/mukesh");
      } else if (speechResult.includes("praveen")) {
        navigate("/praveen");
      }
    };

    recognition.onerror = (event) => {
      console.error(event.error);
    };
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Voice Navigation </h1>
      
      {/* Start/Stop button with color change */}
      <div>
        <button
          onClick={listening ? stopListening : startListening}
          style={{
            backgroundColor: listening ? "blue" : "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {listening ? "Stop Listening" : "Start Listening"}
        </button>
      </div>
      
      <p>Speak: "Parents", "Manjunath", "Mukesh", or "Praveen"</p>

      {/* Buttons for Other Users */}
      <div style={{ marginTop: "20px" }}>
        
      </div>

      <textarea
        value={transcript}
        rows="3"
        cols="100"
        readOnly
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default SpeechRecog;
