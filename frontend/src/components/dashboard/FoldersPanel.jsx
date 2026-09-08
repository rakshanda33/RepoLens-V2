function FoldersPanel({ folders }) {
  return (
    <div className="rl-panel">
      <h2 className="rl-panel__title">Major folders</h2>
      {folders && folders.length > 0 ? (
        <ul className="rl-file-list">
          {folders.map((folder) => (
            <li key={folder} className="rl-file-list__item">
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="rl-file-list__icon">
                <path
                  fill="currentColor"
                  d="M1.75 2A1.75 1.75 0 0 0 0 3.75v8.5C0 13.216.784 14
                  1.75 14h12.5A1.75 1.75 0 0 0 16 12.25v-7.5A1.75 1.75 0 0
                  0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55
                  1 5 1H1.75Z"
                />
              </svg>
              <span className="rl-mono">{folder}/</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rl-panel__empty">No major folders found.</p>
      )}
    </div>
  );
}

export default FoldersPanel;
