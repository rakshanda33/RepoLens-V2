function LanguagesPanel({ languages }) {
  return (
    <div className="rl-panel">
      <h2 className="rl-panel__title">Languages</h2>
      {languages && languages.length > 0 ? (
        <ul className="rl-tag-list">
          {languages.map((language) => (
            <li key={language} className="rl-pill">
              {language}
            </li>
          ))}
        </ul>
      ) : (
        <p className="rl-panel__empty">No languages detected.</p>
      )}
    </div>
  );
}

export default LanguagesPanel;
