import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackEvent } from "@/lib/analytics";

const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));
const Contact = lazy(() => import("./pages/Contact"));
const Post = lazy(() => import("./pages/Post"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteAndConversionTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    trackEvent("page_view", { page_path: pathname });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          event_category: "contact",
          event_label: href.replace("tel:", ""),
          page_location: window.location.pathname,
        });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", {
          event_category: "contact",
          event_label: href.replace("mailto:", ""),
          page_location: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-background" aria-busy="true">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const App = () => (
  <BrowserRouter>
    <RouteAndConversionTracker />
    <Navbar />

    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tjanster" element={<Services />} />
        <Route path="/tjanster/:serviceId" element={<ServiceDetail />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/utforda-arbeten" element={<Works />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

    <Footer />
  </BrowserRouter>
);

export default App;