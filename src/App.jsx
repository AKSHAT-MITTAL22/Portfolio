import { Analytics } from "@vercel/analytics/react";
import SkipLink from "./components/layout/SkipLink";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import PersonSchema from "./components/seo/PersonSchema";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import CredentialsSection from "./components/sections/CredentialsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import MetricBand from "./components/sections/MetricBand";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";

export default function App() {
  return (
    <>
      <PersonSchema />
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <HeroSection />
        <MetricBand />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CredentialsSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <Analytics />
    </>
  );
}
