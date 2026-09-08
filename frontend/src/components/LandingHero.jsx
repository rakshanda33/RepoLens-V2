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
      <p className="rl-hero__kicker">AI-powered repository analysis</p>
      <h1 className="rl-hero__title">
        Understand any GitHub repository in minutes
      </h1>
      <p className="rl-hero__subtitle">
        Paste a public repository URL and RepoLens will map its structure,
        surface the files worth reading first, and explain what the code
        actually does — plus generate interview questions to test your
        understanding.
      </p>

      <form className="rl-repo-form" onSubmit={handleSubmit}>
        <div className="rl-repo-form__field">
          <svg
            className="rl-repo-form__icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M8 0a8 8 0 0 0-2.53 15.59c.4.074.547-.174.547-.386
              0-.19-.007-.693-.01-1.36-2.226.484-2.696-1.073-2.696-1.073
              -.364-.924-.89-1.17-.89-1.17-.727-.497.055-.487.055-.487
              .804.057 1.226.826 1.226.826.714 1.223 1.873.87 2.33.665
              .072-.517.28-.87.508-1.07-1.777-.202-3.644-.888-3.644-3.953
              0-.873.312-1.587.823-2.147-.082-.202-.357-1.016.078-2.117
              0 0 .672-.215 2.2.82a7.65 7.65 0 0 1 4.003 0c1.528-1.035
              2.2-.82 2.2-.82.435 1.1.16 1.915.078 2.117.513.56.823
              1.274.823 2.147 0 3.073-1.87 3.749-3.652 3.947.287.247.543.735
              .543 1.48 0 1.07-.01 1.933-.01 2.196 0 .214.144.463.55.385A8
              8 0 0 0 8 0Z"
            />
          </svg>
          <input
            type="text"
            className="rl-repo-form__input"
            placeholder="https://github.com/owner/repository"
            value={repoUrl}
            onChange={(event) => setRepoUrl(event.target.value)}
            autoComplete="off"
            spellCheck="false"
            aria-label="Public GitHub repository URL"
          />
        </div>
        <button
          type="submit"
          className="rl-btn rl-btn--primary rl-repo-form__submit"
          disabled={isLoading || !repoUrl.trim()}
        >
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
          <span className="rl-hero__feature-title">Structure</span>
          <span className="rl-hero__feature-desc">
            Languages, major folders and important files at a glance
          </span>
        </div>
        <div className="rl-hero__feature">
          <span className="rl-hero__feature-title">AI analysis</span>
          <span className="rl-hero__feature-desc">
            A plain-language breakdown of what the project does and how it&apos;s built
          </span>
        </div>
        <div className="rl-hero__feature">
          <span className="rl-hero__feature-title">Interview prep</span>
          <span className="rl-hero__feature-desc">
            Repository-specific questions to test your understanding
          </span>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
