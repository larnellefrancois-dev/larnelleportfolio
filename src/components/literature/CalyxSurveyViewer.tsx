import React from 'react';
import { paleIntervalLocations, type RiskClass } from '@/data/realms-content';

const MONO = "'Space Mono', monospace";
const SERIF = "'Cormorant Garamond', serif";
const BORDER = 'rgba(138,28,42,0.3)';
const BODY = 'rgba(212,197,181,0.75)';

const RISK_COLOR: Record<RiskClass, string> = {
  nominal: 'rgba(125,167,217,0.8)',
  caution: '#d4b271',
  restricted: '#e05a6a',
  sealed: '#b32435',
};

/** Calyx survey / location viewer. List-first (accessible + SEO-friendly);
    can grow into a map-like interface later. */
export default function CalyxSurveyViewer() {
  return (
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
      {paleIntervalLocations.map((loc) => (
        <article key={loc.designation} style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(10,11,28,0.5)', borderRadius: '3px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.25rem', fontWeight: 400, letterSpacing: '0.05em', color: '#f7e6b7' }}>{loc.name}</h3>
            <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.1em', color: '#b32435' }}>{loc.designation}</span>
          </div>
          <dl style={{ margin: '16px 0 0', display: 'grid', gap: '12px' }}>
            <div>
              <dt style={{ fontFamily: MONO, fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(212,197,181,0.4)' }}>Environment</dt>
              <dd style={{ margin: '4px 0 0', fontFamily: SERIF, fontSize: '1rem', color: BODY, lineHeight: 1.6 }}>{loc.environment}</dd>
            </div>
            <div>
              <dt style={{ fontFamily: MONO, fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(212,197,181,0.4)' }}>Signal notes</dt>
              <dd style={{ margin: '4px 0 0', fontFamily: SERIF, fontSize: '1rem', color: BODY, lineHeight: 1.6 }}>{loc.signalNotes}</dd>
            </div>
            <div>
              <dt style={{ fontFamily: MONO, fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(212,197,181,0.4)' }}>Risk classification</dt>
              <dd style={{ margin: '6px 0 0' }}>
                <span style={{ fontFamily: MONO, fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '4px 10px', borderRadius: '999px', border: `1px solid ${RISK_COLOR[loc.risk]}`, color: RISK_COLOR[loc.risk] }}>
                  {loc.risk}
                </span>
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
