"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full px-4 max-w-[800px]">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
              Türkiye'nin ilk AI-First şirketini kuruyoruz.
            </h1>
            <p className="mb-10 text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
              İlk ürünümüz <strong>RelatIQ</strong>, kurumsal iletişimdeki krizleri
              oluşmadan fark eden yapay zekâ sistemi. Şirket kuruldu. Sermaye hazır.
              Şimdi bu vizyonu birlikte inşa edecek <strong>kurucu CTO</strong>'yu arıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#cto"
                className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/80"
              >
                CTO Çağrısını Oku
              </Link>
              <Link
                href="mailto:berdan@ai-first.me?subject=CTO Adaylığı"
                className="rounded-md border border-black bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-white/10"
              >
                Bana Ulaş
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
