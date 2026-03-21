import Founders from "@/components/Founders"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
// import Testimonials from "@/components/Testimonials"
import Tools from "@/components/Tools"
import Workflow from "@/components/Workflow"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Dubbing from "@/components/Dubbing"
import Services from "@/components/Services"

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
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