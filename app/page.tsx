import { Navbar } from "./components/Navbar";
import { ProfileSection } from "./components/ProfileSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SelectedWorksSection } from "./components/SelectedWorksSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { CredentialsSection } from "./components/CredentialsSection";
import { ContactFooter } from "./components/ContactFooter";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-ink">
      <Navbar />
      <main>
        <ProfileSection />
        <AboutSection />
        <SelectedWorksSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <CredentialsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
