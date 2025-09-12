import React from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Placeholder behavior — replace with real OAuth / Firebase later
    alert("Sign-in placeholder — implement real auth here.");
    // After successful sign in you might redirect:
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] p-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
        <p className="text-sm text-gray-300 mb-6">
          This is a placeholder UI for authentication. Hook up Google/Firebase later.
        </p>

        <button
          onClick={handleSignIn}
          className="w-full px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition"
        >
          Sign in with Google
        </button>

        <div className="text-xs text-gray-400 mt-4">
          We'll wire real auth in Phase 3.
        </div>
      </div>
    </div>
  );
}

