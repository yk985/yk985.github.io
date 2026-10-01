import React, { useEffect, useState } from "react";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";

import { PROFILE, FOCUS, EXPERIENCE, PROJECTS, SKILLS, LANGUAGES } from "./data";
import Section from "./components/Section";
import Reveal from "./components/Reveal";
import ThemeToggle from "./components/ThemeToggle";
import ProjectCard from "./components/ProjectCard";
import ExperienceEntry from "./components/ExperienceEntry";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function useStuck() {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return stuck;
}

export default function App() {
  const stuck = useStuck();
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header" data-stuck={stuck}>
        <div className="container">
          <nav className="nav" aria-label="Main">
            <a className="nav-brand" href="#top">{PROFILE.name}</a>

            <div className="nav-links">
              {NAV.map((n) => (
                <a key={n.href} className="nav-link" href={n.href}>{n.label}</a>
              ))}
            </div>

            <div className="nav-actions">
              <ThemeToggle />
              <a
                className="btn btn-primary"
                href={`${process.env.PUBLIC_URL}/${PROFILE.cv}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} aria-hidden="true" />
                CV
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* ---------------------------------------------------------- hero */}
        <div className="hero" id="top">
          <div className="container">
            <div className="hero-grid">
              <Reveal>
                <h1>{PROFILE.name}</h1>
                <p className="hero-role">
                  <strong>{PROFILE.role}</strong>
                  <br />
                  {PROFILE.tagline}
                </p>

                <div className="hero-intro">
                  <p>{PROFILE.intro}</p>
                </div>

                <ul className="status-row" aria-label="Availability">
                  {PROFILE.status.map((s) => (
                    <li key={s} className="chip">
                      <span className="dot" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="hero-actions">
                  <a className="btn btn-primary" href="#contact">Get in touch</a>
                  <a
                    className="btn btn-ghost"
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} aria-hidden="true" />
                    GitHub
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="portrait-wrap">
                  <img
                    className="portrait"
                    src={`${process.env.PUBLIC_URL}/${PROFILE.photo}`}
                    alt={`Portrait of ${PROFILE.name}`}
                    width="520"
                    height="520"
                    loading="eager"
                  />
                  <p className="permit-note">
                    <strong>Swiss work authorisation.</strong> As an EPFL graduate I qualify for
                    facilitated access to the Swiss labour market.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------- about */}
        <Section id="about" eyebrow="About" title="What I actually do">
          <Reveal>
            <div className="prose" style={{ marginBottom: "var(--s-12)" }}>
              <p>{PROFILE.intro2}</p>
            </div>
          </Reveal>

          <div className="focus-grid">
            {FOCUS.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="focus-card">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------- experience */}
        <Section id="experience" eyebrow="Experience" title="Research and industry">
          <div className="timeline">
            {EXPERIENCE.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i, 3) * 0.05}>
                <ExperienceEntry item={item} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------ projects */}
        <Section id="projects" eyebrow="Projects" title="Things I built on my own time">
          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* -------------------------------------------------------- skills */}
        <Section id="skills" eyebrow="Toolkit" title="Skills and languages">
          <div className="skills-grid">
            {SKILLS.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.05}>
                <div className="skill-group">
                  <h3>{group.group}</h3>
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item} className="tag">{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <ul className="lang-row" aria-label="Languages">
              {LANGUAGES.map((l) => (
                <li key={l.name}>
                  <div className="lang-name">{l.name}</div>
                  <div className="lang-level">{l.level}</div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        {/* ------------------------------------------------------- contact */}
        <div className="container">
          <Reveal>
            <section className="contact" id="contact" aria-labelledby="contact-heading">
              <h2 id="contact-heading">Get in touch</h2>
              <p>
                I am looking for a first role from April 2027 in protein and molecular machine
                learning, scientific ML, or quantitative modelling. If that is what your team does,
                I would like to hear from you.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
                  <Mail size={16} aria-hidden="true" />
                  {PROFILE.email}
                </a>
                <a
                  className="btn btn-ghost"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  className="btn btn-ghost"
                  href={`${process.env.PUBLIC_URL}/${PROFILE.cv}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={16} aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </section>
          </Reveal>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>&copy; {year} {PROFILE.name}</span>
          <div className="footer-links">
            <a href={`mailto:${PROFILE.email}`}>Email</a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
