function ImportantFilesPanel({ files }) {
  return (
    <div className="rl-panel">
      <h2 className="rl-panel__title">Important files</h2>
      {files && files.length > 0 ? (
        <ul className="rl-file-list">
          {files.map((file) => (
            <li key={file} className="rl-file-list__item">
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="rl-file-list__icon">
                <path
                  fill="currentColor"
                  d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184
                  1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75
                  1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25
                  0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0
                  .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Z"
                />
              </svg>
              <span className="rl-mono">{file}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rl-panel__empty">No important files found.</p>
      )}
    </div>
  );
}

export default ImportantFilesPanel;
