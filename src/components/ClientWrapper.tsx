"use client";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
