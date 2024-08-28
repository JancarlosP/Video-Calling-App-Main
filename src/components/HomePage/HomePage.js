import React, { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const handleRoomIdGenerate = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const timestamp = Date.now().toString().substring(-4);
    setRoomId(randomId + timestamp);
  };

  const handleOneAndOneCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=one-on-one`);
  };
  const handleGroupCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=group-call`);
  };
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">Sistema de Chat Distribuido
        </h1>
        <p className="homepage-subtitle">
          Para iniciar una llamada de uno a uno o grupal genera un Room ID
        </p>
        <div className="room-id-container">
          <input
            type="text"
            className="room-id-input"
            placeholder="Generar Room ID"
            value={roomId}
            readOnly
          />
          <button className="generate-button" onClick={handleRoomIdGenerate}>
            Generar
          </button>
        </div>
        <div className="call-buttons">
          <button
            className="call-button"
            onClick={handleOneAndOneCall}
            disabled={!roomId}
          >
            Llamada Uno a UNo
          </button>
          <button
            className="call-button"
            onClick={handleGroupCall}
            disabled={!roomId}
          >
            Llamada Grupal
          </button>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
