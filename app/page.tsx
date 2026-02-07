import Founders from "@/components/Founders"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"
import Tools from "@/components/Tools"
import Workflow from "@/components/Workflow"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Dubbing from "@/components/Dubbing"

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Workflow />
      <Tools />
      <Portfolio />
      <Dubbing />
      {/* <Testimonials /> */}
      <Founders />
      <Contact />
      <Footer />
    </main>
  )
}

export default App