import React from 'react';
import { cn } from '../lib/cn';

export default function GradientButton({ as: Tag = 'button', className = '', children, ...props }) {
  return (
    <Tag
      className={cn(
        'relative inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white',
        'bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500',
        'transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-glow',
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-xl opacity-30 bg-radial" />
    </Tag>
  );
}
