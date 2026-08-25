import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { ProjectSingle } from "../pages/ProjectSingle";
import { Artwork } from "../pages/Artwork";
import { About } from "../pages/About";
import { Experience } from "../pages/Experience";
import { Contact } from "../pages/Contact";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-shell">
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectSingle />} />
            <Route path="/artwork" element={<Artwork />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
