import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SpeechRecog = () => {
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();
  const recognitionRef = useRef(null); // Stores the recognition instance
  const isRecognitionStarted = useRef(false); // Keeps track of whether recognition is running

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.error("Speech Recognition API not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognitionRef.current = recognition;

    const startRecognition = () => {
      if (!isRecognitionStarted.current) {
        recognition.start();
        isRecognitionStarted.current = true;
        console.log("Speech recognition started");
      }
    };

    const stopRecognition = () => {
      if (isRecognitionStarted.current) {
        recognition.stop();
        isRecognitionStarted.current = false;
        console.log("Speech recognition stopped");
      }
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[event.resultIndex][0].transcript.toLowerCase().trim();
      setTranscript(speechResult);
      console.log("Speech recognized:", speechResult);

      if (speechResult.includes("manjunath")) {
        console.log("Navigating to /manjunath");
        navigate("/manjunath");
      } else if (speechResult.includes("praveen")) {
        console.log("Navigating to /praveen");
        navigate("/praveen");
      } else if (speechResult.includes("mukesh")) {
        console.log("Navigating to /mukesh");
        navigate("/mukesh");
      } else if (speechResult.includes("parents")) {
        console.log("Navigating to /parents");
        navigate("/parents");
      } else if (speechResult.includes("home")) {
        console.log("Navigating to /");
        navigate("/");
      } else {
        console.log("No matching command found");
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      // Implement error handling logic here, such as retrying recognition or providing feedback to the user
      startRecognition(); // Automatically restart recognition on errors
    };

    recognition.onend = () => {
      console.log("Speech recognition ended unexpectedly, restarting...");
      startRecognition(); // Automatically restart recognition when it ends
    };

    startRecognition(); // Start listening when the component is mounted

    return () => {
      stopRecognition();
    };
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Voice Navigation App</h1>

      {/* Instructions */}
      <p>Speak: "Parents", "Manjunath", "Mukesh", "Praveen", or "Home"</p>

      {/* Display transcript */}
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