import { useEffect, useState } from "react";

const STEPS = [
  "Connecting to GitHub...",
  "Mapping repository...",
  "Inspecting important files...",
  "Building repository context...",
  "Consulting AI...",
];

// Cycles the active step to signal ongoing work. This is a visual pulse,
// not a progress percentage — the real completion event is the API call
// resolving in App.jsx.
function useCyclingStep(count, intervalMs = 1800) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  return active;
}

function LoadingState({ repoUrl }) {
  const activeStep = useCyclingStep(STEPS.length);

  return (
    <section className="rl-loading" role="status" aria-live="polite">
      <div className="rl-loading__scan" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <h2 className="rl-loading__title">Exploring repository</h2>
      {repoUrl && <p className="rl-loading__repo">{repoUrl}</p>}

      <ul className="rl-loading__steps">
        {STEPS.map((step, index) => (
          <li
            key={step}
            className={[
              "rl-loading__step",
              index === activeStep ? "is-active" : "",
              index < activeStep ? "is-done" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="rl-loading__step-mark" aria-hidden="true" />
            {step}
          </li>
        ))}
      </ul>

      <p className="rl-loading__note">
        This can take up to a minute depending on repository size.
      </p>
    </section>
  );
}

export default LoadingState;
