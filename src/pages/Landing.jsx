import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '../components/GradientButton.jsx';
import { Users, Swords, Rocket } from 'lucide-react';

export default function Landing() {
  return (
    <section className="container pt-16 pb-24">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-gray-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Real-time Multiplayer Quiz
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="gradient-text">Clash with knowledge.</span>
          <br />
          Win with speed ⚡
        </h1>
        <p className="text-gray-300/90 mb-8">
          Create a room, invite friends, beat the timer, and top the scoreboard.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* same as before */}
          <GradientButton as={Link} to="/lobby">
            Jump into Lobby
          </GradientButton>

          {/* safe Play button using the same GradientButton component */}
          <GradientButton as={Link} to="/game/test">
            Play
          </GradientButton>

          <Link
            to="/auth"
            className="px-5 py-3 rounded-xl glass hover:shadow-glow transition font-semibold"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-14">
        <FeatureCard icon={<Users />} title="Create or Join Rooms" desc="Instant lobbies for fast matches." />
        <FeatureCard icon={<Swords />} title="Battle in Real Time" desc="Same question, same timer, fair play." />
        <FeatureCard icon={<Rocket />} title="Zero Friction" desc="One click to start, no downloads." />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="glass rounded-2xl p-6 hover:shadow-glow transition">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 mb-4">
        {React.cloneElement(icon, { className: 'w-6 h-6 text-indigo-300' })}
      </div>
      <h3 className="font-display text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-300/90">{desc}</p>
    </div>
  );
}