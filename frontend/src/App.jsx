import { useCallback, useState } from "react";
import AppHeader from "./components/AppHeader.jsx";
import LandingHero from "./components/LandingHero.jsx";
import LoadingState from "./components/LoadingState.jsx";
import ErrorState from "./components/ErrorState.jsx";
import DashboardView from "./components/dashboard/DashboardView.jsx";
import { analyzeRepository } from "./api/repolens.js";
import "./App.css";

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

function App() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [repoUrl, setRepoUrl] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const runAnalysis = useCallback(async (url) => {
    setRepoUrl(url);
    setStatus(STATUS.LOADING);
    setErrorMessage("");

    try {
      const data = await analyzeRepository(url);
      setResult(data);
      setStatus(STATUS.SUCCESS);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong.");
      setStatus(STATUS.ERROR);
    }
  }, []);

  const handleReset = useCallback(() => {
    setStatus(STATUS.IDLE);
    setResult(null);
    setErrorMessage("");
    setRepoUrl("");
  }, []);

  const handleRetry = useCallback(() => {
    if (repoUrl) runAnalysis(repoUrl);
  }, [repoUrl, runAnalysis]);

  return (
    <div className="rl-app">
      <AppHeader hasResult={status === STATUS.SUCCESS} onReset={handleReset} />

      <main className="rl-main">
        {status === STATUS.IDLE && (
          <LandingHero onAnalyze={runAnalysis} isLoading={false} />
        )}

        {status === STATUS.LOADING && <LoadingState repoUrl={repoUrl} />}

        {status === STATUS.ERROR && (
          <ErrorState
            message={errorMessage}
            repoUrl={repoUrl}
            onRetry={handleRetry}
            onReset={handleReset}
          />
        )}

        {status === STATUS.SUCCESS && result && (
          <DashboardView result={result} repoUrl={repoUrl} />
        )}
      </main>

      <footer className="rl-footer">
        <span>RepoLens — AI-powered GitHub repository analyzer</span>
      </footer>
    </div>
  );
}

export default App;
