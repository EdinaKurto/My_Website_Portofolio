import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectSingle } from './pages/ProjectSingle';
import { Experience } from './pages/Experience';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Artwork } from './pages/Artwork';
import './styles/globals.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D1018]">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectSingle />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/artwork" element={<Artwork />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}