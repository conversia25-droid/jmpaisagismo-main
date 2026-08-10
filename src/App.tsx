import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import ServicosPage from "./pages/Servicos";
import PortfolioPage from "./pages/Portfolio";
import SobrePage from "./pages/Sobre";
import ContatoPage from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const routerBasename =
  import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;