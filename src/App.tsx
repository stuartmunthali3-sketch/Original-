import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import Home from "./pages/Home";
import PocketOptionGate from "./pages/PocketOptionGate";
import Dashboard from "./pages/Dashboard";

function Router() {
  const { user, isAuthenticated } = useAuth();
  const [pocketOptionId, setPocketOptionId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("pocketOptionId");
    }
    return null;
  });

  const handleGateOpen = (id: string) => {
    setPocketOptionId(id);
    localStorage.setItem("pocketOptionId", id);
  };

  const handleLogout = () => {
    setPocketOptionId(null);
    localStorage.removeItem("pocketOptionId");
  };

  // If not authenticated, show home page
  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    );
  }

  // If authenticated but no Pocket Option ID, show gate
  if (!pocketOptionId) {
    return <PocketOptionGate onGateOpen={handleGateOpen} />;
  }

  // If authenticated and has Pocket Option ID, show dashboard
  return <Dashboard pocketOptionId={pocketOptionId} onLogout={handleLogout} />;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
