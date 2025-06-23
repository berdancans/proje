"use client";

import { useState } from "react";

export default function FounderSection() {
  const [show, setShow] = useState(false);

  return (
    <section id="kurucudan-mesaj" className="mt-20 px-6 md:px-20 flex flex-col items-center">
      <button
        onClick={() => setShow(!show)}
        className="px-8 py-3 bg-blue-600 text-white rounded-md text-base font-medium hover:bg-blue-700 transition"
      >
        {show ? "Mesajı Gizle" : "Kurucunun Hikayesini Göster"}
      </button>

      {show && (
        <div className="mt-8 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-lg max-w-3xl w-full">
          <h2 className="text-2xl font-bold mb-4">Ben Kimim?</h2>
          <p className="text-base leading-relaxed space-y-4">
            Ben <strong>Berdan Can Gürel</strong>. Türkiye merkezli ama global ölçekte çözümler sunan bir yapay zekâ şirketi kuruyorum: <strong>AI-First</strong>.
            <br /><br />
            Bu yolculuk lüks bir tercihten değil, zorunlulukla gelen kararlılıktan doğdu. Ne yatırımcı, ne ekip, ne de çıkış planı… Sadece fikir ve azim.
            <br /><br />
            İlk ürünümüz <strong>RelatIQ</strong>, iç iletişimdeki görünmeyen çatlakları analiz eden bir yapay zekâ sistemidir. Şirket içi sessizlikleri ve kriz ihtimallerini görünür kılıyoruz.
            <br /><br />
            AI-First, yapay zekâyı algoritmadan öte, vicdan ve vizyonla inşa edenlerin işidir.
          </p>
        </div>
      )}
    </section>
  );
}
