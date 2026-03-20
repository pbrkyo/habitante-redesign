import Hero from "@/components/home/Hero";
import StatementBar from "@/components/home/StatementBar";
import Manifesto from "@/components/home/Manifesto";
import ProcessGrid from "@/components/home/ProcessGrid";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import QuoteStats from "@/components/home/QuoteStats";
import NeuroSection from "@/components/home/NeuroSection";
import ProjectTeaser from "@/components/home/ProjectTeaser";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatementBar />
      <Manifesto />
      <ProcessGrid />
      <ProjectsShowcase />
      <QuoteStats />
      <NeuroSection />
      <ProjectTeaser />
      <CTASection />
    </>
  );
}
