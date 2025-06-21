import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | AI-First",
  description:
    "AI-First ile iletişime geçin. İşbirliği, yatırım, medya ve teknik destek konularında size yardımcı olmaktan memnuniyet duyarız.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="İletişim"
        description="AI-First hakkında sorularınız mı var? Potansiyel işbirlikleri, teknik detaylar veya yatırım fırsatları için bize ulaşın."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
