import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Sol Metin Alanı */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Neden AI-First, Neden RelatIQ?"
                paragraph="Kurumsal iletişimdeki krizler genellikle geç fark edilir.  
RelatIQ, duygu analizi ve yazışma örüntüleri üzerinden bu krizleri önceden tespit eden ilk yapay zeka sistemidir.  
Şimdi bu sistemi birlikte kurumsal ölçekte büyütecek bir CTO arıyoruz."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Duygu + Örüntü tabanlı iletişim analizi" />
                    <List text="Outlook / Slack entegrasyon mimarisi" />
                    <List text="KVKK ve on-premise kurulum desteği" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Modüler dashboard yapısı" />
                    <List text="Kurumsal iletişim yeniden tanımlanıyor. Kod tarafı seninle tamamlanacak." />
                    <List text="Sıfırdan teknik mimari kuracak CTO aranıyor" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Görsel Alanı */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px]">
                <Image
                  src="/images/about/about-image.png"
                  alt="RelatIQ dashboard"
                  className="mx-auto w-full h-auto object-contain dark:hidden"
                  width={500}
                  height={500}
                />
                <Image
                  src="/images/about/about-image-dark.png"
                  alt="RelatIQ dashboard dark"
                  className="mx-auto hidden w-full h-auto object-contain dark:block"
                  width={500}
                  height={500}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
