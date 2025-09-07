import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wandile Umuzi Lodge - Near Matopos National Park, Zimbabwe",
  description: "Experience authentic Zimbabwean hospitality at Wandile Umuzi Lodge. Located near Matopos National Park and Maleme Dam. Offering chalets, camping, and educational farm tours.",
  keywords: "Zimbabwe, Matopos National Park, lodge, accommodation, camping, farm tours, Maleme Dam, Bulawayo",
  authors: [{ name: "Wandile Umuzi Lodge" }],
  openGraph: {
    title: "Wandile Umuzi Lodge - Near Matopos National Park",
    description: "Experience authentic Zimbabwean hospitality at Wandile Umuzi Lodge. Located near Matopos National Park and Maleme Dam.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandile Umuzi Lodge - Near Matopos National Park",
    description: "Experience authentic Zimbabwean hospitality at Wandile Umuzi Lodge.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Wandile Umuzi Lodge",
              "description": "Authentic Zimbabwean lodge near Matopos National Park",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Zimbabwe Bottle Store, 3rd Ave & R. Mugabe Way",
                "addressLocality": "Bulawayo",
                "addressCountry": "Zimbabwe"
              },
              "telephone": "+263776329831",
              "url": "https://wandileumuzi.com",
              "priceRange": "$15-$30 USD",
              "amenityFeature": [
                "Camping",
                "Chalets",
                "Farm Tours",
                "Braai Facilities",
                "Kitchen Access"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
