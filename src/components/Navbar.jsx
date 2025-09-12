import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-gray-950/40 border-b border-white/10">
      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-indigo-400" />
          <span className="font-display text-lg tracking-tight text-white">
            Trivia Clash
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <NavLink
            to="/lobby"
            className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Play
          </NavLink>
          <Link
            to="/auth"
            className="px-3 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
