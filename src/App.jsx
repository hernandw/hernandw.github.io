import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/home/Home"
import About from "./components/about/about"
import Experience from "./components/experience/Experience"
import Education from "./components/education/Education"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Blog from "./components/blog/Blog"


const App = () => {
  return (
    <>
    <Navbar />
    <div className="w-full h-full p-8  pt-4 bg-black text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      </div>
    </>
  )
}

export default App
