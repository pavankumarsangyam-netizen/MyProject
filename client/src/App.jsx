import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import './App.css'
import { LoadingScreen, ProgressBar, Cursor, Navbar, Footer, SocialDock, BackToTop, FloatingCTA, SkeletonLoader } from './components/Shell'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Experience = lazy(() => import('./pages/Experience'))
const Education = lazy(() => import('./pages/Education'))
const Skills = lazy(() => import('./pages/Skills'))
const Projects = lazy(() => import('./pages/Projects'))
const Certifications = lazy(() => import('./pages/Certifications'))
const Achievements = lazy(() => import('./pages/Achievements'))
const Blogs = lazy(() => import('./pages/Blogs'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Services = lazy(() => import('./pages/Services'))
const Resume = lazy(() => import('./pages/Resume'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, lerp: .08 })
    let frame
    const raf = (time) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(frame); lenis.destroy() }
  }, [])
  return <><ProgressBar /><Cursor /><AnimatePresence>{loading && <LoadingScreen done={() => setLoading(false)} />}</AnimatePresence><Navbar /><Suspense fallback={<SkeletonLoader />}><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/experience" element={<Experience />} /><Route path="/education" element={<Education />} /><Route path="/skills" element={<Skills />} /><Route path="/projects" element={<Projects />} /><Route path="/certifications" element={<Certifications />} /><Route path="/achievements" element={<Achievements />} /><Route path="/blogs" element={<Blogs />} /><Route path="/testimonials" element={<Testimonials />} /><Route path="/services" element={<Services />} /><Route path="/resume" element={<Resume />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} />
  </Routes></AnimatePresence></Suspense><Footer /><SocialDock /><FloatingCTA /><BackToTop /></>
}
