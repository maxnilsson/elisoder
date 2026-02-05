import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

// IMPORTERA NAVBAR OCH FOOTER HÄR:
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Toaster />
      <BrowserRouter>
        
        {/* LÄGG NAVBAR HÄR SÅ SYNS DEN PÅ ALLA SIDOR */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/utforda-arbeten" element={<Works />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* LÄGG FOOTER HÄR SÅ SYNS DEN PÅ ALLA SIDOR */}
        <Footer />

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;