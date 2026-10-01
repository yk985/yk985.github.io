import React from "react";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <div className="section-head">
          <div>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            <h2 id={`${id}-heading`}>{title}</h2>
          </div>
          <span className="rule" aria-hidden="true" />
        </div>
        {children}
      </div>
    </section>
  );
}
