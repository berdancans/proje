"use client";

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
          İletişime Geç
        </h2>
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Adınız
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary"
              placeholder="Adınızı girin"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary"
              placeholder="E-posta adresinizi girin"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary"
              placeholder="Mesajınızı yazın"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white hover:bg-primary-dark transition"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
