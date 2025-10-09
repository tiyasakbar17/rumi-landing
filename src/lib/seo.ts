import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function defaultMetadata(overrides?: Partial<Metadata>): Metadata {
  const title = {
    default: siteConfig.name,
    template: `%s · ${siteConfig.shortName}`,
  } as Metadata["title"];

  const description = siteConfig.description;
  const url = siteConfig.url;

  const base: Metadata = {
    metadataBase: new URL(url),
    title,
    description,
    keywords: siteConfig.keywords,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: url,
    },
  };

  return {
    ...base,
    ...overrides,
  };
}
