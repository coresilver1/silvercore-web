import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Button } from "./components/ui/button";
import { fetchSiteContent } from "./lib/api";
import { SiteLayout } from "./components/site/SiteLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const LoadingState = () => (
  <div className="min-h-screen bg-[#050814] px-6 py-20 text-slate-50">
    <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center border border-white/10 bg-white/[0.03] px-8 text-center shadow-[0_30px_100px_rgba(5,8,20,0.55)]">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300" data-testid="loading-eyebrow">
          Silver Core Partners
        </p>
        <h1 className="mt-4 font-['Cormorant_Garamond'] text-4xl tracking-tight" data-testid="loading-heading">
          Preparing the advisory experience...
        </h1>
      </div>
    </div>
  </div>
);

const ErrorState = ({ onRetry }) => (
  <div className="min-h-screen bg-[#050814] px-6 py-20 text-slate-50">
    <div className="mx-auto max-w-3xl border border-white/10 bg-white/[0.03] px-8 py-14 shadow-[0_30px_100px_rgba(5,8,20,0.55)]">
      <p className="text-sm uppercase tracking-[0.35em] text-sky-300" data-testid="error-eyebrow">
        Connection issue
      </p>
      <h1 className="mt-4 font-['Cormorant_Garamond'] text-4xl tracking-tight" data-testid="error-heading">
        We couldn’t load the Silver Core site content.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300" data-testid="error-message">
        Please retry. If the issue continues, the backend may still be reloading.
      </p>
      <Button
        className="mt-8 rounded-none border border-sky-300 bg-sky-300 px-6 py-5 text-slate-950 hover:bg-sky-200"
        onClick={onRetry}
        data-testid="retry-load-button"
      >
        Retry loading
      </Button>
    </div>
  </div>
);

const AppRoutes = ({ content }) => (
  <SiteLayout
    brand={content.brand}
    contact={content.contact}
    globalCoverage={content.global_coverage}
    chat={content.chat}
  >
    <Routes>
      <Route path="/" element={<HomePage content={content} />} />
      <Route path="/about" element={<AboutPage content={content} />} />
      <Route path="/services" element={<ServicesPage content={content} />} />
      <Route path="/investments" element={<InvestmentsPage content={content} />} />
      <Route path="/insights" element={<InsightsPage content={content} />} />
      <Route path="/contact" element={<ContactPage content={content} />} />
      <Route path="/privacy-policy" element={<PrivacyPage content={content} />} />
      <Route path="/terms-of-service" element={<TermsPage content={content} />} />
      <Route path="*" element={<HomePage content={content} />} />
    </Routes>
  </SiteLayout>
);

function App() {
  const [content, setContent] = useState(null);
  const [status, setStatus] = useState("loading");

  const loadContent = async () => {
    setStatus("loading");
    try {
      const siteContent = await fetchSiteContent();
      setContent(siteContent);
      setStatus("ready");
    } catch (error) {
      console.error("Unable to load site content", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  if (status === "loading") {
    return <LoadingState />;
  }

  if (status === "error" || !content) {
    return <ErrorState onRetry={loadContent} />;
  }

  return (
    <div className="App bg-[#050814] text-slate-50">
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes content={content} />
      </BrowserRouter>
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;
