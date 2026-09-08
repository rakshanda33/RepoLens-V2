import Logo from "./Logo.jsx";

function AppHeader({ hasResult, onReset }) {
  return (
    <header className="rl-header">
      <div className="rl-header__inner">
        <button
          type="button"
          className="rl-header__brand"
          onClick={onReset}
          aria-label="RepoLens home"
        >
          <Logo />
        </button>

        <nav className="rl-header__nav">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rl-header__link"
          >
            GitHub
          </a>
          {hasResult && (
            <button type="button" className="rl-btn rl-btn--ghost" onClick={onReset}>
              Analyze another repository
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
