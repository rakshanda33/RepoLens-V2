const STEPS = [
  "Fetching repository metadata",
  "Mapping folder structure",
  "Reading important files",
  "Running AI analysis",
];

function LoadingState({ repoUrl }) {
  return (
    <section className="rl-loading" role="status" aria-live="polite">
      <div className="rl-loading__spinner" aria-hidden="true" />
      <h2 className="rl-loading__title">Analyzing repository</h2>
      {repoUrl && <p className="rl-loading__repo">{repoUrl}</p>}
      <ul className="rl-loading__steps">
        {STEPS.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
      <p className="rl-loading__note">
        This can take up to a minute depending on repository size.
      </p>
    </section>
  );
}

export default LoadingState;
