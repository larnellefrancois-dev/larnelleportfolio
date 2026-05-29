'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';

interface TocItem {
  id: string;
  label: string;
}

interface ArticleData {
  slug: string;
  tag: string;
  date: string;
  readTime: string;
  title: string;
  toc: TocItem[];
  content: React.ReactNode;
}

const pStyle: React.CSSProperties = { fontSize: '19px', lineHeight: 1.7, color: '#111111', fontWeight: 300, marginBottom: '32px' };
const h2Style: React.CSSProperties = { fontSize: '32px', fontWeight: 400, letterSpacing: '-0.02em', margin: '64px 0 24px 0', color: '#111111' };

const semanticTokensContent = (
  <>
    <p style={pStyle}>
      For years, design systems were synonymous with static style guides—collections of hex codes and pixel values captured in a PDF or a Figma file. As our products have scaled from single-page apps to sprawling multi-platform ecosystems, the traditional "palette" has become a bottleneck.
    </p>
    <p style={pStyle}>
      In a modern enterprise environment, hardcoding values like <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', backgroundColor: '#F7F7F7', padding: '2px 6px', borderRadius: '3px' }}>#3B82F6</code> (Blue 500) into your components is a liability. It provides no context, offers zero flexibility for theming, and makes sweeping visual updates nearly impossible across a large codebase.
    </p>
    <h2 id="intro" style={h2Style}>The Primitive Problem</h2>
    <p style={pStyle}>
      Primitive tokens represent the raw values of your brand. They are the "what"—Blue 500, Spacing 16, Radius 8. While they are a necessary foundation, they lack intent. When a designer uses "Blue 500" for a primary button, a link, and a notification icon, they have created a rigid link between three disparate UI patterns.
    </p>
    <blockquote style={{ margin: '60px -80px', padding: '40px 80px', backgroundColor: '#F7F7F7', fontSize: '28px', fontWeight: 300, lineHeight: 1.4, letterSpacing: '-0.01em', borderLeft: '4px solid #111111', color: '#111111' }}>
      "Tokens are not just variables; they are the contract between design and engineering that defines how a brand feels across any medium."
    </blockquote>
    <h2 id="semantic" style={h2Style}>The Semantic Layer</h2>
    <p style={pStyle}>
      The semantic layer introduces the "how" and "where". Instead of using a primitive color directly, we map that primitive to a semantic token that describes its function. This abstraction allows us to change the underlying value without touching the component implementation.
    </p>
    <div style={{ backgroundColor: '#F7F7F7', padding: '32px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', lineHeight: 1.6, margin: '40px 0', borderRadius: '4px', color: '#333333', overflowX: 'auto' }}>
      {`{\n  "color": {\n    "action": {\n      "primary": {\n        "background": { "value": "{color.blue.500}" },\n        "text": { "value": "{color.white}" }\n      },\n      "secondary": {\n        "border": { "value": "{color.gray.200}" }\n      }\n    }\n  }\n}`}
    </div>
    <p style={{ fontSize: '12px', color: '#999999', marginTop: '12px', textAlign: 'center', marginBottom: '32px' }}>Example JSON structure for a nested semantic token system.</p>
    <h2 id="structure" style={h2Style}>Defining a Taxonomy</h2>
    <p style={pStyle}>
      The success of a token system lives and dies by its naming convention. A robust taxonomy follows a predictable pattern: [System].[Category].[Element].[State]. For example, <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', backgroundColor: '#F7F7F7', padding: '2px 6px', borderRadius: '3px' }}>color.bg.canvas.subtle</code> tells a developer exactly what the token is for, even without seeing the value.
    </p>
    <p style={pStyle}>
      By building this architecture, we enable features like Dark Mode and High Contrast themes at the system level. The components remain agnostic of the specific color values, merely asking for "the canvas background" and receiving the appropriate value based on the user's current context.
    </p>
    <h2 id="governance" style={h2Style}>Scaling Implementation</h2>
    <p style={pStyle}>
      Implementing this at scale requires a single source of truth. Whether you use Style Dictionary, Theo, or a custom build tool, your tokens must be exported into the specific formats your engineers need—SCSS, CSS Variables, Swift, or Compose.
    </p>
    <p style={pStyle}>
      This systemic approach transforms design from a series of manual handoffs into a continuous, automated pipeline where a single change in the brand architecture propagates instantly across every surface of the product.
    </p>
  </>
);

const measuringSuccessContent = (
  <>
    <p style={pStyle}>
      Design systems are often evaluated by what they produce: components, tokens, documentation pages, Figma libraries, coded patterns, and governance structures. Those outputs matter, but they are not the same as success. A design system is not successful because it exists. It is successful because it changes how teams work and improves what users experience.
    </p>
    <p style={pStyle}>
      That distinction is easy to lose.
    </p>
    <p style={pStyle}>
      In many organizations, especially large ones, a design system can look healthy from the outside while quietly underperforming in practice. The library is polished. The documentation is live. The team gives demos. Leadership can point to a shared framework and say the business is moving toward consistency. Yet product teams still duplicate patterns, developers still rebuild components from scratch, accessibility still varies from one flow to another, and design reviews still surface avoidable inconsistencies. When that happens, the issue is not whether the system has shipped. The issue is whether it is being adopted in a way that meaningfully changes delivery.
    </p>
    <p style={pStyle}>
      That is why design system measurement needs to move beyond surface-level indicators.
    </p>
    <h2 id="adoption" style={h2Style}>Adoption and Its Limits</h2>
    <p style={pStyle}>
      Adoption is usually the first metric teams reach for, and it makes sense. How many teams are using the system? How many components have been pulled into production? How many files reference the library? Those numbers are useful, but they are incomplete. A team can technically adopt a system while overriding most of it. They can use the button and input components but ignore the content patterns, spacing rules, accessibility standards, and interaction guidance that make the system coherent. High adoption without depth can create a false sense of maturity.
    </p>
    <p style={pStyle}>
      A better approach is to measure success across multiple layers.
    </p>
    <h2 id="efficiency" style={h2Style}>Operational Efficiency</h2>
    <p style={pStyle}>
      The first layer is operational efficiency. Is the system helping teams move faster? Are common UI patterns being solved once instead of repeatedly? Has the time required to start a new feature or launch a new page meaningfully decreased? Can designers and developers work from a clearer shared standard? If the answer is yes, then the system is doing more than creating consistency. It is reducing friction in delivery.
    </p>
    <h2 id="quality" style={h2Style}>Quality and Resilience</h2>
    <p style={pStyle}>
      The second layer is quality. Are interfaces becoming more consistent across products? Are accessibility requirements being met more reliably? Are interaction patterns more predictable? Is the system helping reduce avoidable UX regressions? This is where the user benefit begins to show. A strong design system should not just make things easier to build. It should make the product feel more coherent, trustworthy, and usable.
    </p>
    <p style={pStyle}>
      The third layer is resilience. Can the system support change without forcing teams into rework? This is one of the most overlooked measures of system success. If a brand update, theme expansion, or accessibility improvement still requires dozens of disconnected overrides, the system has not yet become true infrastructure. Mature systems create leverage. They allow teams to change the product with less disruption because standards and dependencies have already been structured intentionally.
    </p>
    <h2 id="human" style={h2Style}>The Human Layer</h2>
    <p style={pStyle}>
      Then there is the human layer, which matters more than many dashboards will ever show. Do teams trust the system? Do they understand when to use it, how to contribute to it, and where its boundaries are? Do they see it as a helpful enabler or as a rigid central team imposing rules from a distance? A system that is technically strong but culturally weak will struggle to scale. Real adoption depends not just on assets, but on confidence.
    </p>
    <p style={pStyle}>
      This is why success metrics should be chosen carefully. Counting components is easy. Measuring clarity, consistency, reduced duplication, and cross-team trust is harder. But the harder metrics are often the ones that reveal whether the system is actually working.
    </p>
    <p style={pStyle}>
      Some of the most useful indicators are indirect. Fewer custom one-off solutions. Faster alignment between design and engineering. Less variance in core patterns across business lines. Reduced time spent resolving UI inconsistencies during QA. Better accessibility compliance at scale. Clearer handoff. More reusable code. These signals may not always look dramatic in a status report, but they point to something much more important than output. They point to system health.
    </p>
    <p style={pStyle}>
      This also means success should not be measured in isolation from business outcomes. A design system exists to support products, not just designers. If it improves page-launch speed, reduces production rework, strengthens brand consistency, or helps teams ship user improvements with less effort, then it is creating business value. That matters, especially in enterprise environments where design systems must justify not just their craft, but their contribution.
    </p>
    <p style={pStyle}>
      Still, it is important not to overpromise. A design system will not solve every product problem. It will not replace good product thinking, content strategy, research, or delivery discipline. What it can do is create a stronger baseline. It can remove avoidable inconsistency, reduce decision fatigue, and make quality easier to repeat. That alone is meaningful.
    </p>
    <p style={pStyle}>
      The mistake many teams make is treating the system itself as the goal. It is not. The goal is better products, better workflows, and better outcomes delivered through a more reliable foundation.
    </p>
    <p style={pStyle}>
      That is what success really looks like. Not more assets. More leverage.
    </p>
  </>
);

const deathOfStaticMockupContent = (
  <>
    <p style={pStyle}>
      For a long time, static mockups were treated as the natural end point of the design process. A screen was explored, refined, reviewed, approved, and handed off. The layout was polished, the spacing looked intentional, the typography was tuned, and the visual hierarchy was clear. In many teams, that was considered complete design work.
    </p>
    <p style={pStyle}>
      It no longer is.
    </p>
    <p style={pStyle}>
      Modern digital products are not experienced as still images. They are responsive, stateful, interactive systems shaped by data, device constraints, content variability, motion, accessibility requirements, and live user behavior. A static frame can suggest what a product might look like, but it often fails to capture what the experience actually is.
    </p>
    <p style={pStyle}>
      That gap matters more now than ever.
    </p>
    <h2 id="limits" style={h2Style}>The Limits of Static</h2>
    <p style={pStyle}>
      Static mockups still have value. They are useful for exploration, alignment, presentation, and focused visual thinking. They help teams define layout direction, hierarchy, and tone. But the problem begins when a static mockup is mistaken for a finished design artifact rather than what it really is: a partial representation of a much more complex experience.
    </p>
    <p style={pStyle}>
      This becomes obvious the moment a design enters implementation. A clean frame turns into a series of questions. What happens when the title wraps to three lines? How does this card behave on smaller breakpoints? What is the hover state? What does loading look like? What happens when the user has no data? What is disabled, and why? How does the animation support meaning instead of distracting from it? If those decisions were not already considered, then design has not ended. It has merely paused.
    </p>
    <h2 id="final-medium" style={h2Style}>Designing in the Final Medium</h2>
    <p style={pStyle}>
      That is why more designers are moving toward designing in the final medium, or at least closer to it.
    </p>
    <p style={pStyle}>
      The final medium is not the mockup. It is the interface as it behaves in context. That often means working in higher-fidelity prototypes, interactive systems, or code-based experiments that can reflect real responsiveness, content change, motion, and state transitions. It means thinking about design less as a collection of screens and more as a set of rules, relationships, and behaviors.
    </p>
    <p style={pStyle}>
      This shift is not just technical. It changes how designers think.
    </p>
    <p style={pStyle}>
      When designing in the final medium, layout becomes less about ideal compositions and more about structural resilience. Typography becomes less about selecting a beautiful size on one screen and more about defining a scale that performs across devices and densities. Components become less about polished snapshots and more about variants, logic, edge cases, and interaction expectations. The design process becomes less theatrical and more operational.
    </p>
    <p style={pStyle}>
      That may sound less romantic, but it often leads to stronger work.
    </p>
    <h2 id="reality" style={h2Style}>Reality as a Design Tool</h2>
    <p style={pStyle}>
      Designing in code, or in prototyping tools that behave more like code, reveals constraints earlier. It exposes weak assumptions. It forces decisions that static screens can easily postpone. It becomes easier to see when a pattern is over-designed, when spacing only works in ideal content scenarios, or when a transition adds friction instead of clarity. In other words, working in the final medium introduces reality sooner, and reality is often useful.
    </p>
    <p style={pStyle}>
      This is especially important in product environments where implementation quality and delivery speed matter. The closer design artifacts are to real product behavior, the less translation is required later. Engineers spend less time guessing intent. Designers can validate decisions with more confidence. Stakeholders can react to something closer to the actual experience rather than a polished but incomplete preview.
    </p>
    <p style={pStyle}>
      It also changes collaboration. Static mockups tend to reinforce a linear process: design first, then build. Designing in the final medium supports a more integrated workflow, where design and engineering influence each other earlier and more often. That is a healthier model for modern product teams, especially when systems, responsiveness, and interaction detail are central to the work.
    </p>
    <h2 id="future" style={h2Style}>Where Design Lives Now</h2>
    <p style={pStyle}>
      Of course, this does not mean every project needs to begin in code or that every designer should abandon visual design tools. Figma and similar platforms still play a vital role. They are excellent for exploration, systemization, critique, and fast iteration. The point is not that static design is useless. The point is that static design is no longer sufficient on its own.
    </p>
    <p style={pStyle}>
      The most effective teams now understand that a frame is not the product. It is evidence of a direction. The real design emerges when that direction is tested against behavior, content, devices, motion, and implementation.
    </p>
    <p style={pStyle}>
      Static mockups are not disappearing because they failed. They are becoming less central because the products we design have outgrown them.
    </p>
    <p style={pStyle}>
      Design now lives in systems, states, and interactions. Increasingly, it also lives in the medium where users will actually experience it.
    </p>
    <p style={pStyle}>
      That is where more of the real work needs to happen.
    </p>
  </>
);

const typeSystemsContent = (
  <>
    <p style={pStyle}>
      Typography is one of the most powerful tools in interface design, yet it is often treated too narrowly. Many teams think about type in terms of style selection: a heading size, a body size, a font family, maybe a line height. That may be enough for a small marketing page or a tightly controlled layout. It is not enough for a system.
    </p>
    <p style={pStyle}>
      A type system is not just a collection of text styles. It is a framework for hierarchy, rhythm, readability, and consistency across a product ecosystem. When done well, it helps content feel intentional no matter where it appears. When done poorly, it creates subtle friction everywhere: awkward scaling, broken hierarchy, inconsistent emphasis, poor responsiveness, and layouts that feel less composed the moment content changes.
    </p>
    <p style={pStyle}>
      This is why typography deserves to be approached as infrastructure rather than decoration.
    </p>
    <h2 id="hierarchy" style={h2Style}>Hierarchy as Relationship</h2>
    <p style={pStyle}>
      The first misconception many teams have is that bigger equals more important and smaller equals less important. That is only part of the story. Hierarchy is created through relationships, not isolated sizes. Weight, spacing, contrast, case, line length, alignment, and proximity all contribute to how text is understood. A strong type system defines these relationships deliberately so that users do not have to work to understand what matters.
    </p>
    <p style={pStyle}>
      This becomes especially important in digital products, where content is dynamic and layouts need to respond across devices. A heading that looks balanced on desktop may become overpowering on mobile. A body size that feels refined at one breakpoint may become cramped when line lengths change. A spacing rhythm that supports readability in one context may collapse when multiple content blocks stack. Without a system, teams end up solving these issues ad hoc, which leads to inconsistency.
    </p>
    <h2 id="semantic" style={h2Style}>Semantic Approach to Type</h2>
    <p style={pStyle}>
      A mature type system helps prevent that. It defines not just style values, but logic. It answers questions such as: what distinguishes display text from interface headings? How many heading levels are actually needed? When should emphasis come from weight versus size? How should scales adapt between desktop and mobile? Where does legibility take priority over brand expression? What line heights support scanning versus sustained reading? These are design decisions, but they are also system decisions.
    </p>
    <p style={pStyle}>
      One of the most useful shifts a team can make is moving from named visual styles toward a more intentional semantic approach. Instead of scattering labels like "H1," "H2," "Body Large," and "Caption" without broader structure, a semantic type system considers role and usage. A product may need display styles for brand expression, heading styles for structure, body styles for comprehension, label styles for controls, and supporting text styles for metadata or guidance. Each role should behave predictably across the interface.
    </p>
    <h2 id="responsive" style={h2Style}>Responsive Typography</h2>
    <p style={pStyle}>
      This is where responsive typography becomes more than a technical refinement. It becomes part of the system's integrity. Type should not simply shrink proportionally as the screen gets smaller. It should adapt according to reading context. Large display styles may need more dramatic scaling. Dense UI labels may need tighter control. Long-form content may benefit from different line lengths and spacing than dashboards or transactional flows. Good responsive type systems recognize that the same content function can require different expression depending on context.
    </p>
    <p style={pStyle}>
      Fluid typography can help here, but only when used with restraint. The appeal of fluid scaling is obvious: type adjusts smoothly across viewport sizes, reducing the need for rigid breakpoint jumps. But fluid systems are not automatically better. They still require careful bounds, testing, and judgment. A beautifully mathematical scale can still produce poor reading experiences if it prioritizes elegance over usability. As with most systems work, the goal is not sophistication for its own sake. It is consistency that serves clarity.
    </p>
    <h2 id="brand" style={h2Style}>Brand and Governance</h2>
    <p style={pStyle}>
      There is also the question of brand. In many organizations, typography carries a large portion of the visual identity. A distinctive typeface can shape tone, trust, and memorability more than color alone. But brand expression should not come at the expense of usability. A type system has to hold both. It should reflect the product's personality while remaining legible, flexible, and durable enough for real interface conditions. That balance is what separates expressive typography from effective typography.
    </p>
    <p style={pStyle}>
      Design systems often underestimate how much type decisions affect the rest of the interface. Spacing, component sizing, layout density, vertical rhythm, and even perceived polish are all influenced by typography. In that sense, the type system is not just one layer of the visual language. It is one of the structures everything else depends on.
    </p>
    <p style={pStyle}>
      That is why it needs governance, testing, and intentionality. Teams should know which styles exist, why they exist, where they should be used, and how they behave responsively. They should know when to resist adding another style and when a genuine new need has emerged. Without that discipline, typography becomes bloated quickly, and bloated systems are hard to scale.
    </p>
    <p style={pStyle}>
      The best type systems do not call attention to themselves first. They make content feel clear, balanced, and trustworthy. They support interfaces quietly but powerfully. They allow products to speak in a consistent voice across many contexts without feeling rigid or repetitive.
    </p>
    <p style={pStyle}>
      That is the value of treating typography as a system. It creates order beneath the surface, and that order is what allows content to feel effortless on the surface.
    </p>
  </>
);

const designersWhoCodeContent = (
  <>
    <p style={pStyle}>
      For years, the conversation around design and code has swung between two extremes. On one side is the belief that designers do not need to touch code at all. On the other is the expectation that designers should become full frontend engineers. Neither view is especially useful.
    </p>
    <p style={pStyle}>
      The real opportunity sits somewhere in the middle.
    </p>
    <p style={pStyle}>
      As digital products become more complex, design is no longer limited to static screens. Products now rely on dynamic states, reusable components, responsive behavior, motion systems, content rules, design tokens, accessibility constraints, and platform-specific implementation patterns. In that environment, a designer who understands how interfaces are built is not crossing into another discipline unnecessarily. They are becoming more effective at their own.
    </p>
    <p style={pStyle}>
      This is why the designer who codes is becoming increasingly valuable.
    </p>
    <h2 id="intro" style={h2Style}>The Hybrid Designer</h2>
    <p style={pStyle}>
      That does not mean every designer needs to ship production-ready applications or own the frontend stack. It means that the gap between design intent and implementation reality is too important to ignore. Designers who can think structurally in both visual and technical terms are better equipped to make decisions that survive beyond the mockup.
    </p>
    <p style={pStyle}>
      A designer with some coding fluency tends to approach interface work differently. They are more likely to think in states rather than screenshots. They notice where a component needs clear behavioral rules. They consider how spacing systems scale, how typography behaves responsively, how tokens map across themes, and how a design pattern will hold up when content becomes messy or unpredictable. They are often quicker to identify when an elegant visual idea may create implementation debt, or when a seemingly simple screen actually hides complicated logic.
    </p>
    <p style={pStyle}>
      That awareness changes the quality of design work.
    </p>
    <h2 id="skills" style={h2Style}>Closing the Translation Gap</h2>
    <p style={pStyle}>
      It also changes collaboration. One of the most common causes of design friction is not disagreement, but translation failure. Design hands off pixels. Engineering asks about states, edge cases, and interaction rules. Product asks what is flexible. QA asks what is intentional. If the original design artifact cannot answer those questions, the team ends up making key experience decisions downstream, often under time pressure.
    </p>
    <p style={pStyle}>
      A designer who can speak some of the language of code helps close that gap. They can structure handoff more clearly, anticipate implementation questions earlier, and collaborate with engineers in a way that feels grounded rather than abstract. They are not replacing engineering. They are reducing ambiguity before it becomes expensive.
    </p>
    <h2 id="workflow" style={h2Style}>Systems Work and Creative Advantage</h2>
    <p style={pStyle}>
      This matters even more in design systems work. Systems are where design and code become inseparable. A component library is not just a set of Figma frames. It is a contract between intention and implementation. Variants, states, usage rules, semantic tokens, spacing behavior, naming conventions, and accessibility considerations all need to work across both design and development environments. A systems designer who understands how components are built is often better positioned to create standards that can actually be adopted, rather than admired and ignored.
    </p>
    <p style={pStyle}>
      There is also a creative advantage. Designers who code can prototype ideas with greater fidelity and flexibility. They can test interaction patterns that static tools may not capture well. They can explore motion, responsiveness, progressive disclosure, and live content behavior in ways that feel closer to the real product. In many cases, this leads to better design because it allows thinking to happen in the medium where the experience will actually exist.
    </p>
    <h2 id="future" style={h2Style}>The Future of the Discipline</h2>
    <p style={pStyle}>
      Still, it is important not to romanticize the hybrid role. The answer is not for every designer to absorb the full burden of two disciplines. That can easily lead to burnout, blurred accountability, and unrealistic expectations. The value is not in doing everything. It is in understanding enough to design with sharper judgment and collaborate with less friction.
    </p>
    <p style={pStyle}>
      The strongest hybrid designers are usually not the ones trying to prove that they can do an engineer's job. They are the ones using technical literacy to make design decisions more durable, more precise, and more useful to the team around them.
    </p>
    <p style={pStyle}>
      As products mature, the old wall between design and engineering becomes less practical. Systems, platforms, and interfaces now demand closer integration. In that context, designers who code are often a preview of where the discipline is heading.
    </p>
    <p style={pStyle}>
      The future is not design versus code. It is design that understands how code shapes experience.
    </p>
  </>
);

const systemsGovernanceContent = (
  <>
    <p style={pStyle}>
      A design system does not fail because the components are bad. More often, it fails because no one has defined how decisions get made, who owns the standards, what qualifies as a justified exception, or how the system evolves over time.
    </p>
    <p style={pStyle}>
      In other words, it fails because governance was treated as an administrative detail instead of what it really is: the operating model of the system.
    </p>
    <p style={pStyle}>
      Governance tends to sound less exciting than building components or launching a shiny new library, but it is one of the most important parts of any mature design system. A system can have elegant tokens, polished documentation, and beautifully constructed UI patterns, but without governance, it becomes vulnerable to entropy. Teams fork components, rename things inconsistently, bypass standards under deadline pressure, and introduce one-off solutions that slowly weaken the foundation.
    </p>
    <p style={pStyle}>
      This is not usually caused by carelessness. It is what happens when a system is expected to support many teams, products, contributors, and priorities without a clear decision framework.
    </p>
    <h2 id="intro" style={h2Style}>What Governance Actually Answers</h2>
    <p style={pStyle}>
      Good governance makes the system usable at scale. It answers practical questions. Who approves additions or changes? What criteria determine whether a new component belongs in the system? How are breaking changes communicated? How are competing product needs evaluated? What is the process for proposing an exception? How do design, engineering, content, accessibility, and brand input come together when standards need to evolve?
    </p>
    <p style={pStyle}>
      Without answers to those questions, even well-intentioned teams start solving locally. A product squad needs a new pattern quickly, so it creates one. Another team adapts an existing component slightly and calls it something different. A third team raises a bug or inconsistency, but no one owns the backlog. Over time, the system becomes harder to trust because it no longer reflects a single source of truth. It reflects a collection of parallel decisions.
    </p>
    <p style={pStyle}>
      Governance restores coherence.
    </p>
    <h2 id="ownership" style={h2Style}>Structure That Enables Contribution</h2>
    <p style={pStyle}>
      At its best, governance is not a gatekeeping mechanism. It is a structure that enables contribution without sacrificing consistency. That distinction matters. If governance becomes too rigid, teams see the system as a blocker and work around it. If it becomes too loose, the system loses integrity. The goal is not control for its own sake. It is to create enough structure that the system can absorb growth without collapsing into fragmentation.
    </p>
    <p style={pStyle}>
      That usually means defining multiple layers of ownership. Core maintainers may oversee foundational decisions such as tokens, naming conventions, accessibility standards, and shared components. Product teams may contribute patterns, request enhancements, or pilot new solutions. Review mechanisms can help ensure that additions are useful beyond a single context. Documentation should explain not just what exists, but how change happens.
    </p>
    <h2 id="process" style={h2Style}>Culture and Trust</h2>
    <p style={pStyle}>
      This is where many systems become more cultural than technical. Governance is partly about process, but it is also about trust. Teams need confidence that if they raise a valid need, the system can respond. They need visibility into decisions. They need predictable standards and a sense that stewardship is active, not theoretical. A neglected system sends a signal that standards are optional. A well-governed system sends the opposite signal: consistency matters here, and there is a path for evolving it responsibly.
    </p>
    <p style={pStyle}>
      Metrics can support this, but they should be meaningful. Adoption alone is not enough. A team may technically use the system while overriding large portions of it. More useful signals might include reduction in duplicate patterns, speed of component adoption, quality of documentation, accessibility compliance, number of unmanaged exceptions, or the time it takes to review and integrate proposed changes. These indicators help reveal whether the system is not just present, but functioning as intended.
    </p>
    <h2 id="culture" style={h2Style}>Governance at Scale</h2>
    <p style={pStyle}>
      Governance also becomes more important as organizations grow. A small team can often manage informally because communication is direct and contributors are few. But once a system spans multiple products, brands, business units, or delivery teams, informality begins to break down. Decisions need to be more explicit. Standards need to be documented. Ownership needs to be visible.
    </p>
    <p style={pStyle}>
      That does not mean governance has to be heavy. In fact, lighter governance is often better if it is clear and well enforced. A simple contribution model, a review cadence, a change log, a defined ownership group, and a transparent exception process can go a long way. The key is consistency. Teams should know how to engage with the system without relying on private knowledge or one-off conversations.
    </p>
    <p style={pStyle}>
      A healthy design system is not just a collection of assets. It is an ecosystem. Like any ecosystem, it needs stewardship. Governance is the mechanism that keeps that stewardship real.
    </p>
    <p style={pStyle}>
      The strongest systems are not the ones that launch with the most components. They are the ones that remain coherent, useful, and adaptable as more people begin to shape them.
    </p>
    <p style={pStyle}>
      That is what governance protects. Not just the library, but the long-term integrity of the system itself.
    </p>
  </>
);

const articlesData: Record<string, ArticleData> = {
  'semantic-tokens-architecture': {
    slug: 'semantic-tokens-architecture',
    tag: 'Design Systems',
    date: 'Mar 24, 2024',
    readTime: '12 Min Read',
    title: 'The Architecture of Semantic Tokens: Moving Beyond Color Palettes',
    toc: [
      { id: 'intro', label: '01. The Primitive Problem' },
      { id: 'semantic', label: '02. Semantic Abstraction' },
      { id: 'structure', label: '03. Naming Taxonomy' },
      { id: 'governance', label: '04. Implementation & Scale' },
    ],
    content: semanticTokensContent,
  },
  'measuring-success': {
    slug: 'measuring-success',
    tag: 'Product',
    date: 'Dec 04, 2023',
    readTime: '10 Min Read',
    title: 'Measuring Success',
    toc: [
      { id: 'adoption', label: '01. Adoption and Its Limits' },
      { id: 'efficiency', label: '02. Operational Efficiency' },
      { id: 'quality', label: '03. Quality and Resilience' },
      { id: 'human', label: '04. The Human Layer' },
    ],
    content: measuringSuccessContent,
  },
  'death-of-static-mockup': {
    slug: 'death-of-static-mockup',
    tag: 'Opinion',
    date: 'Nov 19, 2023',
    readTime: '9 Min Read',
    title: 'The Death of the Static Mockup: Designing in the Final Medium',
    toc: [
      { id: 'limits', label: '01. The Limits of Static' },
      { id: 'final-medium', label: '02. Designing in the Final Medium' },
      { id: 'reality', label: '03. Reality as a Design Tool' },
      { id: 'future', label: '04. Where Design Lives Now' },
    ],
    content: deathOfStaticMockupContent,
  },
  'type-systems': {
    slug: 'type-systems',
    tag: 'Visuals',
    date: 'Oct 30, 2023',
    readTime: '8 Min Read',
    title: 'Type Systems',
    toc: [
      { id: 'hierarchy', label: '01. Hierarchy as Relationship' },
      { id: 'semantic', label: '02. Semantic Approach to Type' },
      { id: 'responsive', label: '03. Responsive Typography' },
      { id: 'brand', label: '04. Brand and Governance' },
    ],
    content: typeSystemsContent,
  },
  'designers-who-code': {
    slug: 'designers-who-code',
    tag: 'Engineering',
    date: 'Feb 12, 2024',
    readTime: '8 Min Read',
    title: 'Bridging the Gap: Designers Who Code',
    toc: [
      { id: 'intro', label: '01. The Hybrid Designer' },
      { id: 'skills', label: '02. Closing the Translation Gap' },
      { id: 'workflow', label: '03. Systems Work and Creative Advantage' },
      { id: 'future', label: '04. The Future of the Discipline' },
    ],
    content: designersWhoCodeContent,
  },
  'systems-governance': {
    slug: 'systems-governance',
    tag: 'Leadership',
    date: 'Jan 28, 2024',
    readTime: '10 Min Read',
    title: 'Systems Governance',
    toc: [
      { id: 'intro', label: '01. What Governance Actually Answers' },
      { id: 'ownership', label: '02. Structure That Enables Contribution' },
      { id: 'process', label: '03. Culture and Trust' },
      { id: 'culture', label: '04. Governance at Scale' },
    ],
    content: systemsGovernanceContent,
  },
};

const defaultArticle: ArticleData = {
  slug: '',
  tag: 'Writing',
  date: 'Coming Soon',
  readTime: '5 Min Read',
  title: 'Article Coming Soon',
  toc: [],
  content: (
    <p style={pStyle}>
      This article is currently being written. Check back soon for the full piece.
    </p>
  ),
};

export default function ArticlePage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const article = articlesData[slug] || { ...defaultArticle, slug };

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = article.toc.map((item) => document.getElementById(item.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= 120) {
          setActiveSection(article.toc[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.toc]);

  return (
    <div
      className="max-w-[1600px] mx-auto px-10 py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <SiteHeader activePage="Writing" />

      {/* Article Hero */}
      <div style={{ padding: '120px 0 80px 0', maxWidth: '1000px' }}>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginBottom: '40px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#999999',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          <span>{article.tag}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <h1
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 200,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            marginBottom: '40px',
            color: '#111111',
          }}
        >
          {article.title}
        </h1>
      </div>

      {/* Article Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '80px',
          marginTop: '40px',
        }}
        className="article-layout"
      >
        {/* Sidebar TOC */}
        {article.toc.length > 0 && (
          <aside style={{ position: 'sticky', top: '40px', height: 'fit-content' }}>
            <span
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#999999',
                marginBottom: '24px',
                display: 'block',
              }}
            >
              Contents
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {article.toc.map((item) => (
                <li key={item.id} style={{ marginBottom: '16px' }}>
                  <a
                    href={`#${item.id}`}
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: activeSection === item.id ? '#111111' : '#666666',
                      fontWeight: activeSection === item.id ? 400 : 300,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Article Body */}
        <div style={{ maxWidth: '720px' }}>
          {article.content}

          {/* Back to Writing */}
          <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid #f0f0f0' }}>
            <Link
              href="/writing"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                color: '#111111',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              ← Back to Writing
            </Link>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '120px' }}>
        <SiteFooter />
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .article-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
