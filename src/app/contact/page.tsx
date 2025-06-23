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

      {/* Kurucudan Mesaj */}
      <section className="py-10 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Kurucudan Mesaj
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Ben Berdan Can Gürel. Türkiye merkezli ama global ölçekte çözümler
            sunan bir yapay zekâ şirketi kuruyorum: <strong>AI-First</strong>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Bu yolculuk lüks bir tercihten değil, zorunlulukla gelen
            kararlılıktan doğdu. Hiçbir dış destek olmadan, sadece vizyon ve
            inatla inşa edilen bir sistemdir bu.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            İlk ürünümüz <strong>RelatIQ</strong>, kurum içi iletişimi analiz
            eden ve potansiyel krizleri oluşmadan tespit eden yapay zekâ destekli
            bir platformdur.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Bugün küçük gibi görünen bu adım, yarın onlarca kurumsal yapının karar
            alma mekanizmasına entegre olacak. Çünkü biz sadece ürün değil,
            geleceğin iş yapma şeklini tasarlıyoruz.
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
