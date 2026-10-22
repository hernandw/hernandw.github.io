import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/about/about';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-[#0b1120] text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <div className="content">
        
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </div>
        
      
  );
}

export default App;