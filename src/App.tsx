import Header from "./components/Header"
import Hero from "./components/Hero"
import Programs from "./components/Programs"
import HowItWorks from "./components/HowItWorks"
import WhyUs from "./components/WhyUs"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import ImageContainer from "./components/ImageContainer"

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Programs />
      <ImageContainer/>
      <HowItWorks />
      <WhyUs />
      <CTA />
      <Footer />
    </>
  )
}