"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-20 pt-[120px] dark:bg-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center px-4">
          {/* Logo */}
          <div className="mb-10 animate-fade-in">
            <Image
              src="/images/logo/logo-v2.png"
              alt="AI-First Logo"
              width={200}
              height={80}
              priority
              className="mx-auto"
            />
          </div>

          {/* Metin */}
          <div className="max-w-[800px]">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
              Türkiye'nin ilk AI-First şirketini kuruyoruz.
            </h1>
            <p className="mb-10 text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
              İlk ürünümüz <strong>RelatIQ</strong>, kurumsal iletişimdeki krizleri
              oluşmadan fark eden yapay zekâ sistemi... <br />
              Şimdi bu hedefi birlikte kuracak <strong>kurucu CTO</strong>'yu arıyoruz.
            </p>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <Link
                href="#kurucudan-mesaj"
                className="rounded-md bg-[#3B82F6] px-8 py-4 text-lg font-semibold text-white hover:bg-[#2563EB] transition"
              >
                CTO Çağrısını Oku
              </Link>
              <a
                href="mailto:can@ai-first.me?subject=CTO Adaylığı"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition dark:border-white"
              >
                Bana Ulaş
              </a>
            </div>
          </div>
        </div>

        {/* Kurucudan Mesaj */}
        <div
          id="kurucudan-mesaj"
          className="mt-20 max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-gray-900 dark:text-white"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Vizyon Hikayesi</h2>
          <p className="text-base leading-relaxed space-y-4 text-center">
            Ben <strong>Berdan Can Gürel</strong>. Türkiye merkezli ama global ölçekte çözümler sunan bir yapay zekâ şirketi kuruyorum: <strong>AI-First</strong>.
            <br /><br />
            Bu yolculuk lüks bir tercihten değil, zorunlulukla gelen kararlılıktan doğdu. Arkamda ekip yoktu. Yatırımcım yoktu. Güvenli bir çıkış planım da yoktu. Ama önümde yalnızca tek bir hedef vardı: Yapay zekâ ile global ölçekte çözümler üretmek.
            <br /><br />
            İlk ürünümüz <strong>RelatIQ</strong>, şirket içi iletişimdeki potansiyel krizleri daha oluşmadan önce tespit eden, sessizlikleri ve duygusal kırılmaları analiz eden bir yapay zekâ sistemidir.
            <br /><br />
            Bu fikirle şirketi kurdum, alan adını aldım, logoyu çizdim, ilk sunumu hazırladım ve hangi pilot şirkete gideceğimi kararlaştırdım. Tüm adımları tek başıma attım. Çünkü biliyorum: Yapay zekâ sadece algoritma değil, aynı zamanda bir kararlılık ve sorumluluktur.
            <br /><br />
            AI-First, sadece bir yazılım girişimi değil — gelecekte nasıl çalışacağımızı belirleyecek bir yapı taşıdır. Ve bu yapı taşını inşa etmeye buradan başlıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
