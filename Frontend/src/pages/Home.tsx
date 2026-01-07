import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

function Home() {
  return (
    <>
      <SEO 
        title="Portfolio - Home"
        description="Welcome to my portfolio. Explore my projects, skills, and get in touch."
        keywords="portfolio, projects, web development, react, typescript"
      />
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
