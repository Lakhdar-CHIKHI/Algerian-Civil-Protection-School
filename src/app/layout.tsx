import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { getLangDir } from "rtl-detect";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "National School of firefighters",
  description:
    "The Algerian National School of Firefighters is a premier institution dedicated to training elite firefighters and safety professionals. Established to enhance public safety, it offers rigorous programs that combine practical skills with advanced knowledge.",
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const locale = await getLocale();
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const direction = getLangDir(locale);
  

  return (
    <html lang={locale} dir={direction}>
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          <Layout>
              {children}
          </Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
