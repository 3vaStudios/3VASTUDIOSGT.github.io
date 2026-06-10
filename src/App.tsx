import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Portfolio } from "@/components/Portfolio";
import { BrandImpulse } from "@/components/BrandImpulse";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { EvaParticles } from "@/components/EvaParticles";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function App() {
  useScrollReveal();
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased relative">
      <EvaParticles />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <BrandImpulse />
        <Pricing />
        <Testimonials />
        <FAQ />
        <About />
        <LeadMagnet />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster position="bottom-center" theme="dark" />
    </div>
  );
}
