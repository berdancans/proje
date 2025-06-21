import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | AI-First Teknoloji Şirketi",
  description:
    "AI-First, yapay zekayı merkezine koyan Türkiye merkezli bir teknoloji şirketidir. Kurumsal iletişimi dönüştüren ilk ürünümüz RelatIQ ile tanışın.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hakkımızda"
        description="AI-First, yapay zekayı odağına alan ve kurumsal dünyayı dönüştürmeyi hedefleyen bir teknoloji şirketidir. İlk ürünümüz RelatIQ, kurum içi iletişimi analiz ederek krizleri oluşmadan fark etmenizi sağlar."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
