function FoldersPanel({ folders }) {
  return (
    <div className="rl-panel rl-panel--map">
      <div className="rl-panel__header">
        <h2 className="rl-panel__title rl-panel__title--loud">Repository Map</h2>
        <span className="rl-panel__subtitle">Top-level folders in this codebase</span>
      </div>

      {folders && folders.length > 0 ? (
        <div className="rl-map-grid">
          {folders.map((folder) => (
            <div key={folder} className="rl-map-node">
              <span className="rl-map-node__icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M1.75 2A1.75 1.75 0 0 0 0 3.75v8.5C0 13.216.784 14
                    1.75 14h12.5A1.75 1.75 0 0 0 16 12.25v-7.5A1.75 1.75 0 0
                    0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55
                    1 5 1H1.75Z"
                  />
                </svg>
              </span>
              <span className="rl-map-node__name rl-mono">{folder}/</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="rl-panel__empty">No major folders found.</p>
      )}
    </div>
  );
}

export default FoldersPanel;
