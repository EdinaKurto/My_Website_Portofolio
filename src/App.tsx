import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { ProjectSingle } from "../pages/ProjectSingle";
import { Artwork } from "../pages/Artwork";
import { About } from "../pages/About";
import { Experience } from "../pages/Experience";
import { Contact } from "../pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="site-root">
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectSingle />} />
            <Route path="/artwork" element={<Artwork />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}