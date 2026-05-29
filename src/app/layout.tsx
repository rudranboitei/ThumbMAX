import type { Metadata, Viewport } from "next";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

const PRODUCTION_URL = "https://thumbmax.rudranboitei.com";

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_URL),
  title: {
    default: `${APP_NAME} - Download YouTube Thumbnails in High Quality`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "youtube thumbnail downloader",
    "download youtube thumbnail",
    "youtube thumbnail",
    "high quality thumbnail",
    "free thumbnail downloader",
    "youtube thumbnail extractor",
    "yt thumbnail download",
    "youtube thumbnail 1080p",
    "youtube thumbnail hd",
    "extract youtube thumbnail",
    "thumbnail grabber",
    "thumbmax",
  ],
  authors: [{ name: APP_NAME, url: PRODUCTION_URL }],
  creator: APP_NAME,
  publisher: APP_NAME,
  alternates: {
    canonical: PRODUCTION_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PRODUCTION_URL,
    title: `${APP_NAME} - Download YouTube Thumbnails in High Quality`,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${APP_NAME} - YouTube Thumbnail Downloader`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - Download YouTube Thumbnails in High Quality`,
    description: APP_DESCRIPTION,
    images: ["/opengraph-image.png"],
    creator: "@thumbmax",
    site: "@thumbmax",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ef4444",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${PRODUCTION_URL}/#website`,
      url: PRODUCTION_URL,
      name: APP_NAME,
      description: APP_DESCRIPTION,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${PRODUCTION_URL}/?url={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebApplication",
      "@id": `${PRODUCTION_URL}/#webapp`,
      name: APP_NAME,
      url: PRODUCTION_URL,
      description: APP_DESCRIPTION,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      screenshot: `${PRODUCTION_URL}/opengraph-image.png`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
