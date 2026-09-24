import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import Research from './components/Research.jsx'
import Publications from './components/Publications.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'
import Experience from './components/Experience.jsx'
import About from './components/About.jsx'
import Hobbies from './components/Hobbies.jsx'
import Footer from './components/Footer.jsx'
// import Guestbook from './components/Guestbook.jsx'   // ← uncomment once Render is live

export default function App() {
  return (
    <>
      <a className="skipLink" href="#research">Skip to content</a>
      <Hero />
      <Nav />
      <main>
        <Research />
        <Publications />
        <ProjectGrid />
        <Experience />
        <About />
        <Hobbies />
        {/* <Guestbook /> */}
      </main>
      <Footer />
    </>
  )
}
