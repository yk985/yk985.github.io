import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceEntry({ item }) {
  return (
    <article className="entry">
      <div className="entry-period">
        {item.period}
        {item.upcoming && <span className="entry-upcoming">Upcoming</span>}
      </div>

      <div>
        <div className="entry-org">{item.org}</div>
        <h3 className="entry-title">{item.title}</h3>
        <div className="entry-role">{item.role}</div>

        <ul>
          {item.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        {item.metrics && (
          <div className="metrics">
            {item.metrics.map((m) => (
              <div key={m.label}>
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {item.note && <p className="entry-note">{item.note}</p>}

        {item.link && (
          <a
            className="entry-link"
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.link.label}
            <ArrowUpRight size={15} aria-hidden="true" />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}
