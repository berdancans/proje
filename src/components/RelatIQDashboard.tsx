"use client";

import Image from "next/image";

export default function RelatIQDashboard() {
  return (
    <section className="w-full bg-gray-950 text-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">RelatIQ Kurumsal Dashboard</h2>
      <Image
        src="/relatiq-kurumsal-dashboard.png"
        alt="RelatIQ Kurumsal Dashboard Girişi"
        width={1280}
        height={720}
        className="rounded-xl shadow-2xl"
        priority
      />
    </section>
  );
}