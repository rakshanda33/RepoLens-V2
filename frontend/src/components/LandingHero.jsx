import { useState } from "react";

const EXAMPLE_REPOS = [
  "https://github.com/pallets/flask",
  "https://github.com/facebook/react",
  "https://github.com/axios/axios",
];

function LandingHero({ onAnalyze, isLoading, initialValue }) {
  const [repoUrl, setRepoUrl] = useState(initialValue || "");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = repoUrl.trim();
    if (!trimmed || isLoading) return;
    onAnalyze(trimmed);
  }

  return (
    <section className="rl-hero">
      <div className="rl-hero__bg" aria-hidden="true" />

      <p className="rl-hero__kicker">
        <span className="rl-hero__kicker-dot" />
        AI-powered repository analysis
      </p>

      <h1 className="rl-hero__title">Understand Any GitHub Repository.</h1>

      <p className="rl-hero__subtitle">
        Drop a repository URL. RepoLens maps the codebase, explains how it
        works, and prepares you for the interview.
      </p>

      <form className="rl-repo-form" onSubmit={handleSubmit}>
        <div className="rl-repo-form__field">
          <span className="rl-repo-form__prompt" aria-hidden="true">
            &gt;
          </span>
          <input
            type="text"
            className="rl-repo-form__input"
            placeholder="https://github.com/username/repository"
            value={repoUrl}
            onChange={(event) => setRepoUrl(event.target.value)}
            autoComplete="off"
            spellCheck="false"
            aria-label="Public GitHub repository URL"
          />
          <span className="rl-repo-form__cursor" aria-hidden="true" />
        </div>
        <button
          type="submit"
          className="rl-btn rl-btn--primary rl-repo-form__submit"
          disabled={isLoading || !repoUrl.trim()}
        >
          <span className="rl-repo-form__submit-icon" aria-hidden="true">
            ▸
          </span>
          {isLoading ? "Analyzing…" : "Analyze Repository"}
        </button>
      </form>

      <div className="rl-hero__examples">
        <span>Try:</span>
        {EXAMPLE_REPOS.map((url) => (
          <button
            key={url}
            type="button"
            className="rl-hero__example"
            onClick={() => setRepoUrl(url)}
          >
            {url.replace("https://github.com/", "")}
          </button>
        ))}
      </div>

      <div className="rl-hero__features">
        <div className="rl-hero__feature">
          <span className="rl-hero__feature-icon" aria-hidden="true" />
          <span className="rl-hero__feature-title">Repository Map</span>
          <span className="rl-hero__feature-desc">
            Languages, major folders and important files at a glance
          </span>
        </div>
        <div className="rl-hero__feature">
          <span className="rl-hero__feature-icon" aria-hidden="true" />
          <span className="rl-hero__feature-title">Explorer&apos;s Journal</span>
          <span className="rl-hero__feature-desc">
            A plain-language breakdown of what the project does and how it&apos;s built
          </span>
        </div>
        <div className="rl-hero__feature">
          <span className="rl-hero__feature-icon" aria-hidden="true" />
          <span className="rl-hero__feature-title">Interview Quests</span>
          <span className="rl-hero__feature-desc">
            Repository-specific questions to test your understanding
          </span>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
