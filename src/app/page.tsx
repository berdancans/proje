import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import FounderSection from "@/components/About/FounderSection";
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import RelatIQDashboard from "@/components/RelatIQDashboard";

export const metadata: Metadata = {
  title: "RelatIQ – Kurumsal iletişimde yapay zekâ devrimi",
  description:
    "AI-First tarafından geliştirilen RelatIQ, kurumsal iletişimdeki krizleri oluşmadan önce tespit eden yapay zekâ çözümüdür. Teknik vizyonu birlikte kuracak CTO aranıyor.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <RelatIQDashboard />
      <Features />
      <Contact />
      <FounderSection /> {/* 🌟 Kurucunun Mesajı buraya geldi */}
    </>
  );
}
