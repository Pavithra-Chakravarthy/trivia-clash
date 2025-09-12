import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Lobby from "./pages/Lobby";
import Auth from "./pages/Auth";
import Game from "./pages/Game"; // ✅ use the Game page you just fixed

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page routing */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/auth" element={<Auth />} />

        {/* ✅ Game page route with roomId param */}
        <Route path="/game/:roomId" element={<Game />} />
      </Routes>
    </div>
  );
}
