import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="20" fill="currentColor" opacity="0.2" />
        <path d="M10 20L18 28L30 12" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
    ),
    title: "Duygu ve Gecikme Analizi",
    paragraph:
      "Yapay zekâ ile yazışmalardaki duygusal ton, gecikme örüntüsü ve stres sinyalleri analiz edilir. Ekip içi krizleri erken aşamada tespit eder.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect width="40" height="40" rx="8" fill="currentColor" opacity="0.2" />
        <path d="M10 20H30M20 10V30" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    title: "Slack ve Outlook Entegrasyonu",
    paragraph:
      "RelatIQ, kurumların mevcut iletişim altyapılarına entegre çalışır. Veri güvenliği korunurken analiz sürekli ve arka planda işler.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="20" fill="currentColor" opacity="0.2" />
        <path d="M13 27L27 13M13 13L27 27" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    title: "Modüler Dashboard Mimarisi",
    paragraph:
      "Yönetici, ekip lideri ve İK için farklı yetkilerle erişim sağlar. Hafta bazlı risk haritası ve müdahale gerektiren sinyalleri sunar.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect width="40" height="40" rx="20" fill="currentColor" opacity="0.2" />
        <path d="M15 20L18 23L25 16" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    title: "KVKK ve On-Premise Uyumlu",
    paragraph:
      "Kurumsal müşteriler için tüm veriler müşteri sunucularında tutulabilir. Gizlilik-first altyapı, teknik CTO liderliğinde şekillenecek.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect width="40" height="40" rx="8" fill="currentColor" opacity="0.2" />
        <path d="M10 10H30V30H10V10Z" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    title: "İlk Müşteri ile Pilot Süreç Başladı",
    paragraph:
      "Taha Giyim ile ilk test süreci başlatıldı. CTO, bu süreçte ürünün sahada denenmesine doğrudan katkı verecek.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 5L25 20L15 20L20 35" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
    ),
    title: "Tüm Teknik Yapının Kurucusu Ol",
    paragraph:
      "Bu ürünün kod tabanını seninle sıfırdan kuruyoruz. Backend mimariden veri akışına, AI model entegrasyonuna kadar karar senin.",
  },
];

export default featuresData;
