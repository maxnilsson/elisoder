// Lättviktig konverteringsspårning för Google Analytics 4 (GA4) och Google Ads (gtag / dataLayer).
// Spårar automatiskt klick på telefonnummer (tel:), e-post (mailto:) och inskickade kontaktformulär.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params });
  }
};

export const trackLeadSubmission = (source = "contact_form") => {
  trackEvent("generate_lead", {
    event_category: "engagement",
    event_label: source,
    value: 1,
    currency: "SEK",
  });
};
