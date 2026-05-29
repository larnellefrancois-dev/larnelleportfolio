'use client';
import React, { useState } from 'react';
import { CONTACT_EMAIL } from '@/lib/site-nav';

const INQUIRIES = [
  { id: 'product', label: 'Product design work', subject: 'Product design inquiry' },
  { id: 'art', label: 'Art commission or collaboration', subject: 'Art commission / collaboration' },
  { id: 'literature', label: 'Literary / publishing inquiry', subject: 'Literary / publishing inquiry' },
  { id: 'general', label: 'General contact', subject: 'Hello' },
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
    setSubmitted(true);
  };

  return (
    <div className="ds-container ds-container--narrow ds-section">
      <p className="ds-eyebrow">Contact</p>
      <h1 style={{ fontSize: 'var(--step-3)', margin: 'var(--space-2xs) 0 var(--space-sm)' }}>Start a conversation</h1>
      <p className="ds-lede" style={{ marginBottom: 'var(--space-xl)' }}>
        Product design work, art commissions, literary inquiries, or just to say hello — choose a path and send a note.
      </p>

      {submitted ? (
        <div className="ds-card" style={{ padding: 'var(--space-lg)' }}>
          <p role="status" style={{ fontSize: 'var(--step-1)', color: 'var(--text)' }}>
            Thank you — your message is ready in your mail client. If it didn’t open, email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--accent)' }}>{CONTACT_EMAIL}</a> directly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div>
            <label htmlFor="c-name" style={labelStyle}>Name</label>
            <input id="c-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="c-email" style={labelStyle}>Email</label>
            <input id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="c-inquiry" style={labelStyle}>Nature of inquiry</label>
            <select id="c-inquiry" value={form.inquiry} onChange={(e) => setForm({ ...form, inquiry: e.target.value })} style={inputStyle}>
              {INQUIRIES.map((i) => <option key={i.id} value={i.id}>{i.label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="c-message" style={labelStyle}>Message</label>
            <textarea id="c-message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} />
          </div>
          <div>
            <button type="submit" className="ds-btn ds-btn--primary">Send message</button>
          </div>
        </form>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontFamily: 'var(--font-mono)', fontSize: 'var(--step--1)',
  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--space-3xs)',
};
const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.75em 1em', borderRadius: 'var(--radius-md)',
  border: '1px solid var(--border-strong)', background: 'var(--surface)', color: 'var(--text)',
  font: 'inherit',
};
