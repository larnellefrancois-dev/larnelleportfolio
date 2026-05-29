import React from 'react';

/**
 * Renders a string with [REDACTED] markers (or runs of █) converted to
 * redaction bars. The bar carries an sr-only "redacted" label so meaning
 * survives for screen-reader users.
 */
export default function RedactedText({ children }: { children: string }) {
  const parts = children.split(/(\[REDACTED\]|█+)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part === '[REDACTED]' || /^█+$/.test(part)) {
          return (
            <span
              key={i}
              style={{
                backgroundColor: 'rgba(179,36,53,0.55)',
                color: 'transparent',
                borderRadius: '2px',
                padding: '0 0.15em',
                userSelect: 'none',
              }}
            >
              <span aria-hidden="true">████████</span>
              <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                redacted
              </span>
            </span>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
