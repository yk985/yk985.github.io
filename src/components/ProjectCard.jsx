import React from "react";
import { ArrowUpRight, Lock } from "lucide-react";

export default function ProjectCard({ title, blurb, tags = [], href, status }) {
  return (
    <article className="project">
      <h3>{title}</h3>
      <p>{blurb}</p>

      {tags.length > 0 && (
        <ul className="tags" aria-label="Topics">
          {tags.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
      )}

      <div className="project-foot">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            View the code
            <ArrowUpRight size={15} aria-hidden="true" style={{ verticalAlign: "-2px" }} />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        ) : (
          <span className="project-status">
            <Lock size={14} aria-hidden="true" style={{ verticalAlign: "-2px" }} />{" "}
            {status || "Code not public yet"}
          </span>
        )}
      </div>
    </article>
  );
}
