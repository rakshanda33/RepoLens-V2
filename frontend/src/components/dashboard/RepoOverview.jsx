function RepoOverview({ repository, repoUrl }) {
  if (!repository) return null;

  return (
    <section className="rl-overview">
      <div className="rl-overview__title-row">
        <span className="rl-overview__icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75
              0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.994
              1.117.75.75 0 1 1-1.492.166A2.5 2.5 0 0 1 4 11.5V2.5Zm10.5-1H4.5a1
              1 0 0 0-1 1v8.128A2.5 2.5 0 0 1 4.5 10H12.5V1.5Z"
            />
          </svg>
        </span>
        <h1 className="rl-overview__name">{repository.name}</h1>
        {repository.primary_language && (
          <span className="rl-pill rl-pill--accent">{repository.primary_language}</span>
        )}
      </div>

      {repository.description && (
        <p className="rl-overview__description">{repository.description}</p>
      )}

      <div className="rl-overview__meta">
        {repoUrl && (
          <a
            className="rl-overview__meta-item rl-overview__meta-item--link rl-mono"
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            {repoUrl.replace("https://", "")}
          </a>
        )}
        {repository.default_branch && (
          <span className="rl-overview__meta-item">
            <span className="rl-mono rl-branch-tag">{repository.default_branch}</span>
            default branch
          </span>
        )}
      </div>
    </section>
  );
}

export default RepoOverview;
