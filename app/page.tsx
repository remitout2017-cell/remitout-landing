import ContactSection from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import Footer from "@/components/Footer";
import RemitoutLanding from "@/components/HeroSection";
import ServicesSection from "@/components/ServiceSection";
import StudentTrustSection from "@/components/StudentTrustSection";
import TestimonialCarousel from "@/components/TestimonialSection";
import WhyRemitoutSection from "@/components/WhyRemitoutSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <RemitoutLanding />
      <WhyRemitoutSection />
      <StudentTrustSection />
      <div className="flex flex-col-reverse md:flex-col">
        <ServicesSection />
        <TestimonialCarousel />
      </div>
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
