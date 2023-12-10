import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Fqa from "@/components/Fqa";
import AppInfo from "@/components/AppInfo";
import AppInfo2 from "@/components/AppInfo2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Brands />
      <AppInfo />
      <Fqa />
      <AppInfo2 />
    </main>
  );
}
