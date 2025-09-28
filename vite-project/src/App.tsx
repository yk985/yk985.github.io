import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow p-6 text-center">
        <h1 className="text-4xl font-bold">Youssef Kabbaj</h1>
        <p className="text-lg text-gray-600">Applied Physics MSc Student @ EPFL</p>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-2xl shadow-md mx-auto w-48 h-48 object-cover"
            />
            <div className="md:col-span-2">
              <p className="mb-4">
                I am a motivated and dynamic Master’s student in Applied Physics at EPFL with a passion for
                innovation, problem-solving, and applying physics to real-world challenges. My academic journey has
                given me a strong foundation in physics, mathematics, and computational methods.
              </p>
              <p>
                I am particularly excited about the intersection of physics and artificial intelligence, having worked on
                projects ranging from plasma physics to generative models for proteins. I thrive in collaborative
                environments where I can grow and contribute to impactful research.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-100 py-12 px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Generative Protein Models</h3>
                <p>
                  Built generative models for protein sequences using attention-based architectures and statistical
                  physics approaches, integrating biases to guide sequence generation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Plasma Physics Research</h3>
                <p>
                  Investigated Alfvén wave continuum in tokamaks and contributed to modeling plasma dynamics at the Swiss
                  Plasma Center.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Molecular Dynamics Simulations</h3>
                <p>
                  Applied QM/MM hybrid simulations to molecular systems, learning GROMACS and CP2K workflows for
                  real-world chemical case studies.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <p className="mb-6">
          Feel free to reach out for collaborations, opportunities, or just to connect!
        </p>
        <div className="flex justify-center gap-6">
          <Button asChild variant="outline">
            <a href="mailto:youssef.kabbaj@epfl.ch">
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </a>
          </Button>
          <Button asChild>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t text-sm text-gray-500">
        © {new Date().getFullYear()} Youssef Kabbaj
      </footer>
    </div>
  );
}
