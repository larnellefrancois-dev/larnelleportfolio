'use client';

import React, { useState } from 'react';

import RealmNav from '@/components/RealmNav';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    inquiry: 'product',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

        .contact-page {
          background-color: #05060f;
          color: #e8d099;
          font-family: 'Cormorant Garamond', serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .universe-bg {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 0;
          background: radial-gradient(circle at 50% 50%, #0a0b1c 0%, #05060f 70%);
          overflow: hidden;
        }

        .stars {
          position: absolute;
          width: 100%; height: 100%;
          background-image:
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.3) 100%, transparent),
            radial-gradient(1.5px 1.5px at 80% 30%, rgba(232,208,153,0.5) 100%, transparent),
            radial-gradient(1px 1px at 40% 70%, rgba(125,167,217,0.4) 100%, transparent),
            radial-gradient(2px 2px at 90% 85%, rgba(255,255,255,0.2) 100%, transparent);
          background-size: 200px 200px;
          opacity: 0.6;
          animation: drift 100s linear infinite;
        }

        .summoning-circle {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 90vw; height: 90vw;
          max-width: 1200px; max-height: 1200px;
          pointer-events: none;
          opacity: 0.2;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }

        .rune-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(138,28,42,0.5);
        }

        .rune-ring-1 { width: 100%; height: 100%; animation: spin-slow 180s linear infinite; border-style: double; border-width: 4px; border-color: rgba(212,178,113,0.3); }
        .rune-ring-2 { width: 85%; height: 85%; animation: spin-reverse 120s linear infinite; border: 1px dashed rgba(125,167,217,0.4); }
        .rune-ring-3 { width: 70%; height: 70%; animation: spin 90s linear infinite; border-color: rgba(138,28,42,0.6); }

        .sigil-center {
          position: absolute;
          width: 40%; height: 40%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(138,28,42,0.1) 0%, transparent 70%);
          animation: pulse-glow 8s ease-in-out infinite;
        }

        .portal-stage {
          position: relative;
          z-index: 5;
          padding: 96px 24px 80px;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ritual-form-container {
          width: 100%;
          background: rgba(5,6,15,0.75);
          border: 1px solid rgba(212,178,113,0.2);
          box-shadow: 0 0 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(232,208,153,0.06) inset;
          border-radius: 4px;
          padding: 60px;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .ritual-form-container::before {
          content: '';
          position: absolute;
          inset: 6px;
          border: 1px solid rgba(138,28,42,0.25);
          border-radius: 2px;
          pointer-events: none;
        }

        .form-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .arcane-index {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: rgba(232,208,153,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .arcane-index::before, .arcane-index::after {
          content: '';
          width: 32px; height: 1px;
          background-color: currentColor;
          opacity: 0.4;
        }

        .page-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 400;
          letter-spacing: 0.1em;
          color: #f7e6b7;
          margin-bottom: 16px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.8);
          text-transform: uppercase;
        }

        .page-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-style: italic;
          color: rgba(232,208,153,0.65);
          line-height: 1.6;
          max-width: 80%;
          margin: 0 auto;
        }

        .ritual-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .form-row {
          display: flex;
          gap: 28px;
        }

        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .manuscript-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: rgba(125,167,217,0.8);
          text-transform: uppercase;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }

        .manuscript-label::after {
          content: '';
          flex-grow: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(125,167,217,0.25), transparent);
          margin-left: 10px;
        }

        .manuscript-input, .manuscript-textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(212,178,113,0.25);
          color: #e8d099;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          padding: 10px 0;
          transition: border-color 0.3s ease;
          border-radius: 0;
          outline: none;
        }

        .manuscript-textarea {
          resize: vertical;
          min-height: 120px;
          border: 1px solid rgba(212,178,113,0.2);
          padding: 14px;
          background: rgba(0,0,0,0.2);
        }

        .manuscript-input:focus, .manuscript-textarea:focus {
          border-color: rgba(232,208,153,0.6);
          background: rgba(0,0,0,0.3);
        }

        .manuscript-input::placeholder, .manuscript-textarea::placeholder {
          color: rgba(212,178,113,0.2);
          font-style: italic;
        }

        .select-wrapper { position: relative; }
        .select-wrapper::after {
          content: '▼';
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          color: rgba(212,178,113,0.5);
          position: absolute;
          right: 8px; top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .manuscript-select {
          appearance: none;
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(212,178,113,0.25);
          color: #e8d099;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          padding: 10px 0;
          cursor: pointer;
          border-radius: 0;
          outline: none;
        }

        .manuscript-select option {
          background: #05060f;
          color: #e8d099;
        }

        .summon-btn {
          background: transparent;
          border: 1px solid rgba(138,28,42,0.5);
          color: #b32435;
          font-family: 'Cinzel', serif;
          font-size: 1rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 18px 48px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16,1,0.3,1);
          margin-top: 12px;
          align-self: center;
          border-radius: 2px;
        }

        .summon-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(138,28,42,0.2), transparent);
          transition: left 0.5s ease;
        }

        .summon-btn:hover {
          border-color: #b32435;
          color: #f7e6b7;
          box-shadow: 0 0 30px rgba(138,28,42,0.35) inset, 0 0 20px rgba(138,28,42,0.15);
        }

        .summon-btn:hover::before { left: 100%; }
        .summon-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .footer-meta {
          position: fixed;
          bottom: 30px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 60px;
          z-index: 10;
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          color: rgba(232,208,153,0.3);
          text-transform: uppercase;
          pointer-events: none;
        }

        .success-message {
          text-align: center;
          padding: 40px 0;
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
        @keyframes spin-slow { 100% { transform: rotate(360deg); } }
        @keyframes drift {
          0% { background-position: 0 0; }
          100% { background-position: -1000px 1000px; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @media (max-width: 700px) {
          .form-row { flex-direction: column; gap: 28px; }
          .ritual-form-container { padding: 32px 20px; }
          .footer-meta { display: none; }
          .portal-stage { padding: 80px 16px 60px; }
        }
      `}</style>

      <div className="contact-page">
        <div className="universe-bg">
          <div className="stars" />
        </div>

        <div className="summoning-circle">
          <div className="rune-ring rune-ring-1" />
          <div className="rune-ring rune-ring-2" />
          <div className="rune-ring rune-ring-3" />
          <div className="sigil-center" />
        </div>

        <RealmNav />

        <main className="portal-stage">
          <div className="ritual-form-container">
            <header className="form-header">
              <div className="arcane-index">COMMUNICATIO // INITIATIO</div>
              <h1 className="page-title">Summoning Protocol</h1>
              <p className="page-desc">
                Inscribe your intentions upon the æther. Direct inquiries for commissions, collaborations, or arcane correspondence.
              </p>
            </header>

            {submitted ? (
              <div className="success-message">
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '0.3em',
                    color: 'rgba(125,167,217,0.8)',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                  }}
                >
                  TRANSMISSION RECEIVED
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    color: 'rgba(232,208,153,0.7)',
                    lineHeight: 1.6,
                  }}
                >
                  Your message has been received. A response shall follow in due course.
                </p>
              </div>
            ) : (
              <form className="ritual-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="manuscript-label" htmlFor="contact-name">True Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      className="manuscript-input"
                      placeholder="e.g. Aurelius Void"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="manuscript-label" htmlFor="contact-email">Astral Vector (Email)</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="manuscript-input"
                      placeholder="pathway@realm.net"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="manuscript-label" htmlFor="contact-inquiry">Nature of Inquiry</label>
                    <div className="select-wrapper">
                      <select
                        id="contact-inquiry"
                        className="manuscript-select"
                        value={formState.inquiry}
                        onChange={(e) => setFormState({ ...formState, inquiry: e.target.value })}
                      >
                        <option value="art">Ars Visualis — Art Commission</option>
                        <option value="product">Systema — Product Design</option>
                        <option value="literature">Scriptorium — Literary Inquiry</option>
                        <option value="other">Otherworldly Matters</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="manuscript-label" htmlFor="contact-message">Incantation (Message)</label>
                  <textarea
                    id="contact-message"
                    className="manuscript-textarea"
                    placeholder="Detail the visions you seek to manifest..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="summon-btn" disabled={submitting}>
                  {submitting ? 'Transmitting...' : 'Initiate Contact'}
                </button>
              </form>
            )}
          </div>
        </main>

        <footer className="footer-meta">
          <div>SYS_LOC: COMM_NEXUS</div>
          <div>VER. 9.4.2 // OBSIDIAN</div>
        </footer>
      </div>
    </>
  );
}
