'use client';
import React, { useState, useEffect } from 'react';

interface TypingH1Props {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function TypingH1({ text, style, className }: TypingH1Props) {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypedText(text);
      setTypingDone(true);
      return;
    }
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTypedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setTypingDone(true);
      }
    }, 90);
    return () => clearInterval(timer);
  }, [text]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <h1 style={style} className={className}>
      {typedText}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '2px',
          height: '0.85em',
          backgroundColor: 'currentColor',
          marginLeft: '3px',
          verticalAlign: 'middle',
          opacity: showCursor ? 1 : 0,
          transition: typingDone ? 'opacity 0.1s' : 'none',
        }}
      />
    </h1>
  );
}
