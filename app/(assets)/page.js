import ContentSectionBG from "@/components/home/ContentSectionBG";
import ContentSectionIcons from "@/components/home/ContentSectionIcons";
import HeroSection from "@/components/home/HeroSection";
import HowItUsed from "@/components/home/HowItUsed";
import MetricsSection from "@/components/home/MetricsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <MetricsSection />
      <HowItUsed />
      <ContentSectionIcons />
      <ContentSectionBG />
    </div>
  );
}
