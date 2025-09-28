import React from "react";
import { Button } from "./components/ui/Button";
import ProjectCard from "./components/ProjectCard";

const projects = [
    {
      title: "Generative Protein Models",
      description:
        "Built generative models for protein sequences using attention-based architectures and statistical physics approaches.",
    },
    {
      title: "Plasma Physics Research",
      description:
        "Investigated Alfvén wave continuum in tokamaks and contributed to modeling plasma dynamics at the Swiss Plasma Center.",
    },
    {
      title: "Molecular Dynamics Simulations",
      description:
        "Applied QM/MM hybrid simulations to molecular systems, learning GROMACS and CP2K workflows for real-world chemical case studies.",
    },
  ];

export default function App() {
  return (
    <div>
      <header>
        <h1>Youssef Kabbaj</h1>
        <p>Applied Physics MSc Student @ EPFL</p>
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

      <section className="flex-center">
        <Button variant="outline">Email Me</Button>
        <Button>LinkedIn</Button>
      </section>

      <footer>
        © {new Date().getFullYear()} Youssef Kabbaj
      </footer>
    </div>
  );
}
