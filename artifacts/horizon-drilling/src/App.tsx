import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Fleet from "@/pages/Fleet";
import News from "@/pages/News";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/fleet" component={Fleet} />
        <Route path="/news" component={News} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
