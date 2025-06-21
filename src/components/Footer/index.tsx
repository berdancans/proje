"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-900 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Sol - Logo ve Açıklama */}
          <div className="w-full px-4 md:w-1/2 lg:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo-v2.png"
                  alt="AI-First Logo"
                  width={140}
                  height={30}
                  className="w-full"
                />
              </Link>
              <p className="mb-0 text-base leading-relaxed text-body-color dark:text-white">
                Türkiye merkezli, global ölçekte çözümler sunan AI-First şirketiyiz.
              </p>
            </div>
          </div>

          {/* Sağ - Menü */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Bağlantılar
              </h2>
              <ul>
                <li className="mb-4">
                  <Link
                    href="#about"
                    className="text-base text-body-color duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="#features"
                    className="text-base text-body-color duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                  >
                    Teknolojiler
                  </Link>
                </li>
                <li className="mb-0">
                  <Link
                    href="#contact"
                    className="text-base text-body-color duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />
        <div className="py-8">
          <p className="text-center text-sm text-body-color dark:text-gray-400">
            © {new Date().getFullYear()} AI-First. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
