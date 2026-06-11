'use client';
import React, { useState } from 'react';
import { SceneFrame, SceneScroller } from '@/components/cinematic/CinematicPrimitives';
import { CONTACT_EMAIL } from '@/lib/site-nav';
import { audioEngine } from '@/sound/AudioEngine';

const INQUIRIES = [
  { id: 'product', label: 'Product design work', subject: 'Product design inquiry', wing: 'M·II' },
  {
    id: 'art',
    label: 'Art commission or collaboration',
    subject: 'Art commission / collaboration',
    wing: 'M·I',
  },
  {
    id: 'literature',
    label: 'Literary / publishing inquiry',
    subject: 'Literary / publishing inquiry',
    wing: 'M·III',
  },
  { id: 'general', label: 'General contact', subject: 'Hello', wing: '◈' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', inquiry: 'product', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const chosen = INQUIRIES.find((i) => i.id === form.inquiry) ?? INQUIRIES[3];
    // No backend wired — hand off to the user's mail client, then confirm.
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(chosen.subject)}&body=${body}`;
    audioEngine.play('confirm');
    setSubmitted(true);
  };

  return (
    <SceneScroller>
      <SceneFrame
        tone="product"
        eyebrow="Uplink // Outbound Transmission"
        title="Open a Channel"
        lede="Product design work, art commissions, literary inquiries, or just a signal across the void — choose a wing and transmit."
        meta={[
          { label: 'Relay', value: 'Kingston' },
          { label: 'Latency', value: '< 48 hrs' },
          { label: 'Channel', value: 'Open' },
        ]}
        visual={
          submitted ? (
            <div className="contact-uplink__confirm" role="status">
              <p className="scene-frame__eyebrow">TRANSMISSION STAGED</p>
              <p style={{ color: 'rgba(240,230,211,0.8)', lineHeight: 1.7 }}>
                Your message is ready in your mail client. If it didn’t open, signal{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--accent)' }}>
                  {CONTACT_EMAIL}
                </a>{' '}
                directly.
              </p>
            </div>
          ) : (
            <form className="contact-uplink" onSubmit={handleSubmit} aria-label="Contact form">
              <div className="contact-uplink__field">
                <label htmlFor="c-name">Operator name</label>
                <input
                  id="c-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="contact-uplink__field">
                <label htmlFor="c-email">Return frequency (email)</label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="contact-uplink__field">
                <label htmlFor="c-inquiry">Destination wing</label>
                <select
                  id="c-inquiry"
                  value={form.inquiry}
                  onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                >
                  {INQUIRIES.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.wing} — {i.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="contact-uplink__field">
                <label htmlFor="c-message">Message body</label>
                <textarea
                  id="c-message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="ds-btn ds-btn--primary">
                ◉ Transmit
              </button>
            </form>
          )
        }
      >
        <p className="ds-prose" style={{ maxWidth: '52ch', color: 'rgba(240,230,211,.6)' }}>
          Do not transmit audio. Do not answer non-human signal returns. Plain text is fine.
        </p>
      </SceneFrame>
    </SceneScroller>
  );
}
