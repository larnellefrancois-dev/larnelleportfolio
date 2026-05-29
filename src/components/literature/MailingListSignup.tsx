'use client';
import React, { useState } from 'react';
import { paleIntervalBook } from '@/data/realms-content';

const MONO = "'Space Mono', monospace";
const BORDER = 'rgba(212,178,113,0.3)';

/**
 * Mailing-list signup for The Pale Interval. No backend is wired yet, so on
 * submit it shows an accessible confirmation. Replace `onSubmit` with a real
 * provider (the email is captured in state and ready to forward).
 *
 * TODO (mailing list): POST to a real provider / Supabase table.
 */
export default function MailingListSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: forward `email` to a mailing-list provider.
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="pi-mailing-title" style={{ maxWidth: '32rem' }}>
      <p id="pi-mailing-title" style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(179,36,53,0.7)', marginBottom: '12px' }}>
        Join the mailing list
      </p>

      {submitted ? (
        <p role="status" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontStyle: 'italic', color: '#f7e6b7' }}>
          Thank you — you’ll hear from us when there’s something worth transmitting.
        </p>
      ) : (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ flex: 1, minWidth: '14rem' }}>
              <label htmlFor="pi-mailing-email" style={{ display: 'block', fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(212,197,181,0.6)', marginBottom: '6px' }}>
                Email address
              </label>
              <input
                id="pi-mailing-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{ width: '100%', padding: '12px 16px', borderRadius: '999px', border: `1px solid ${BORDER}`, backgroundColor: 'rgba(212,178,113,0.05)', color: '#f7e6b7', fontFamily: MONO, fontSize: '0.85rem' }}
              />
            </div>
            <button
              type="submit"
              style={{ alignSelf: 'flex-end', padding: '12px 24px', borderRadius: '999px', border: '1px solid #b32435', backgroundColor: 'rgba(179,36,53,0.15)', color: '#f7e6b7', fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}
            >
              Notify me
            </button>
          </div>
          <p style={{ fontFamily: MONO, fontSize: '0.6rem', color: 'rgba(212,197,181,0.4)', marginTop: '10px', lineHeight: 1.5 }}>
            {paleIntervalBook.mailingListNote}
          </p>
        </>
      )}
    </form>
  );
}
