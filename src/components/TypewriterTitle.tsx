import { useState, useEffect } from 'react';

const roles = ['开发者', '创作者', '探索者', 'Builder', 'Dreamer'];

export default function TypewriterTitle() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 40 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentRole.length) {
          setText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="neon-text-cyan">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-neon-cyan ml-1 animate-pulse align-middle" />
    </span>
  );
}
