import React from 'react';

/**
 * Renders a string with [REDACTED] markers (or runs of █) converted to
 * redaction bars. The bar carries an sr-only "redacted" label so meaning
 * survives for screen-reader users.
 *
 * When `revealed` is true (the reader has declassified the document) the
 * bars decay into broken static — the ink lifts, but Veyrath keeps what it
 * keeps: recovered content lives in the document annex, not under the bar.
 */
export default function RedactedText({
  children,
  revealed = false,
}: {
  children: string;
  revealed?: boolean;
}) {
  const parts = children.split(/(\[REDACTED\]|█+)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part === '[REDACTED]' || /^█+$/.test(part)) {
          return (
            <span
              key={i}
              style={{
                backgroundColor: revealed ? 'rgba(179,36,53,0.16)' : 'rgba(179,36,53,0.55)',
                color: revealed ? 'rgba(125,167,217,0.75)' : 'transparent',
                borderRadius: '2px',
                padding: '0 0.15em',
                userSelect: 'none',
                letterSpacing: revealed ? '0.1em' : undefined,
                transition: 'background-color 600ms ease, color 600ms ease',
              }}
            >
              <span aria-hidden="true">{revealed ? '▒▒signal▒▒' : '████████'}</span>
              <span
                style={{
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  overflow: 'hidden',
                  clip: 'rect(0 0 0 0)',
                }}
              >
                {revealed ? 'redaction lifted, fragment unrecoverable' : 'redacted'}
              </span>
            </span>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
