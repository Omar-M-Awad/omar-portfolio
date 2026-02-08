import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Hero from "../components/sections/Hero"
import Projects from "../components/sections/Projects"
import CTA from "../components/sections/CTA"

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default Home
