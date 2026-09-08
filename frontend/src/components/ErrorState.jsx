function ErrorState({ message, repoUrl, onRetry, onReset }) {
  return (
    <section className="rl-error" role="alert">
      <div className="rl-error__icon" aria-hidden="true">
        !
      </div>
      <h2 className="rl-error__title">Couldn&apos;t analyze this repository</h2>
      {repoUrl && <p className="rl-error__repo">{repoUrl}</p>}
      <p className="rl-error__message">{message}</p>
      <div className="rl-error__actions">
        {onRetry && (
          <button type="button" className="rl-btn rl-btn--primary" onClick={onRetry}>
            Try again
          </button>
        )}
        <button type="button" className="rl-btn rl-btn--ghost" onClick={onReset}>
          Analyze a different repository
        </button>
      </div>
    </section>
  );
}

export default ErrorState;
