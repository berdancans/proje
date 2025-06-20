import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="cto">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="Kurucu CTO Görseli"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="Kurucu CTO Görseli"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Teknik liderlik değil, teknik ortaklık
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  RelatIQ’nun çekirdeği hazır. Ama mimariyi birlikte kuracak, sadece yön veren değil; üreten, karar alan bir teknik ortak arıyoruz.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Karar verici, yatırımcıya çıkacak kişi sensin
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  İlk yatırım görüşmelerinde CTO olarak senin teknik planına güven duyulacak.  
                  MVP’ye kadar teknik kararlar senin olacak.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  AI-First vizyonunu birlikte yazacağız
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  RelatIQ sadece bir ürün değil; AI-First çatısı altında inşa edilecek onlarca ürünün ilk adımı.  
                  CTO, bu yapının hem beyni hem de ortak vizyoneri olacak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
