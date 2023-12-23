import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import AppInfo from "@/components/AppInfo";
import AppInfo2 from "@/components/AppInfo2";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Brands />
      {/* <AppInfo /> */}
      <ProjectsSection/>
      <FAQ />
      <ContactForm/>
      {/* <AppInfo2 /> */}
    </main>
  );
}
