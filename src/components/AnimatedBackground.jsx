import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* moving gradient strip */}
      <div
        className="absolute -inset-[40%] opacity-25 blur-3xl"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(167,139,250,0.6), rgba(244,114,182,0.6), rgba(245,158,11,0.6))',
          backgroundSize: '200% 200%',
        }}
      />
      {/* floating blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 rounded-full bg-fuchsia-500/30 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
