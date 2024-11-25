import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

function Home() {
  return (
    <>
    
      <section id='hero'>
        <Hero />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </>
  )
}

export default Home
