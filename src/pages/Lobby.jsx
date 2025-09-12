import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Lobby() {
  const [roomId, setRoomId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createRoom = () => {
    const id = Math.random().toString(36).slice(2, 8);
    navigate(`/game/${id}`);
  };

  const joinRoom = (e) => {
    e.preventDefault();
    setError("");
    const trimmed = roomId.trim();
    if (!trimmed) {
      setError("Please enter a room ID");
      return;
    }
    navigate(`/game/${trimmed}`);
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] p-6">
      <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-2">Game Lobby</h2>
        <p className="text-sm text-gray-300 mb-4">
          Create a room or join an existing one.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <button
            onClick={createRoom}
            className="px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition"
          >
            Create Room
          </button>

          <form onSubmit={joinRoom} className="flex gap-2 flex-1">
            <input
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter Room ID"
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-indigo-400"
            />
            <button
              type="submit"
              className="px-4 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white transition"
            >
              Join
            </button>
          </form>
        </div>

        {error && <div className="text-red-400 text-sm mb-2">{error}</div>}

        <div className="text-xs text-gray-400 mt-4">
          Coming soon: live room list + player count.
        </div>
      </div>
    </div>
  );
}

