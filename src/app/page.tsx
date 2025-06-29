import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/layout/Footer";

export function LandingPage() {
  return (
    <main className="flex flex-col mt-[60px]">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

export default LandingPage;