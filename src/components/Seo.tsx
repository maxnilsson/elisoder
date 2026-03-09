import { useEffect } from "react";

const SITE_NAME = "El i Söder";
const SITE_URL = "https://www.elisoder.se";
const DEFAULT_OG_IMAGE = `${SITE_URL}/Logga.png`;

const upsertMetaByName = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

const Seo = ({ title, description, path, ogImage, type = "website", noIndex = false }: SeoProps) => {
  useEffect(() => {
    const pageTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path}`;
    const finalOgImage = ogImage
      ? ogImage.startsWith("http")
        ? ogImage
        : `${SITE_URL}${ogImage}`
      : DEFAULT_OG_IMAGE;

    document.title = pageTitle;
    upsertMetaByName("description", description);
    upsertMetaByName("twitter:title", pageTitle);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", finalOgImage);

    upsertMetaByProperty("og:title", pageTitle);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:type", type);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", finalOgImage);
    upsertMetaByName("robots", noIndex ? "noindex, nofollow" : "index, follow");

    upsertCanonical(canonicalUrl);
  }, [description, ogImage, path, title, type, noIndex]);

  return null;
};

export default Seo;
