import React from "react";
import { Button } from "./components/ui/Button";
import ProjectCard from "./components/ProjectCard";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const projects = [
    {
      title:"Molecular Dynamics Semester Project",
  description:"Exploring community codes (GROMACS, CP2K, MiMiC) and applying QM/MM hybrid simulations to molecular systems in real-world chemical case studies."
    },
    {
      title:"Biased Generative Protein Models (Internship)",
  description:"Designed attention-based generative protein models with direct coupling analysis (DCA), incorporating bias into training to guide sequence generation and studying statistical relevance."
    },
    {
      title:"Alfvén Wave Continuum in Tokamaks",
  description:"Investigated plasma wave dynamics as part of a semester project at EPFL, contributing to modeling efforts in fusion research."
    },
  ];

export default function App() {
  return (
    <div>
      <header className="site-header">
        <div className="header-content">
          <div>
            <h1>Youssef Kabbaj</h1>
            <p>Applied Physics MSc Student @ EPFL</p>
          </div>
          <a
            href="/CV_youssef_kabbaj.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
          >
            📄 View CV
          </a>
        </div>
      </header>


      <section className="about-grid">
        <img src="/Cv_pic.png" alt="Profile" className="profile-img" />
        <div>
          <p className="mb-4">
                I am a motivated and dynamic Master’s student in Applied Physics at EPFL with a passion for
                innovation, problem-solving, and applying physics to real-world challenges.
              </p>
              <p>
                I am particularly excited about the intersection of physics and artificial intelligence, having worked on
                projects ranging from plasma physics to generative models for proteins.
              </p>
        </div>
      </section>

      <section className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} />
        ))}
      </section>

      <section className="contact-section">
  <h2>Get in Touch</h2>
  <p>
    Feel free to reach out for collaborations, opportunities, or just to connect!
  </p>
  <div className="contact-icons">
    {/* Email */}
    <a href="mailto:youssef.kabbaj@epfl.ch" className="icon-button">
      <Mail className="icon mail" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/your-linkedin-profile"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-button"
    >
      <Linkedin className="icon linkedin" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/yk985"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-button"
    >
      <Github className="icon github" />
    </a>

    {/* CV PDF */}
    <a
      href="/Youssef_Kabbaj_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-button"
    >
      <FileText className="icon cv" />
    </a>
  </div>
</section>

      <footer>
        © {new Date().getFullYear()} Youssef Kabbaj
      </footer>
    </div>
  );
}
