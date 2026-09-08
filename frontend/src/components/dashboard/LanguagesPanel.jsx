// Deterministic hue per language name so the same language always gets the
// same dot color across analyses, without hardcoding a language table.
function hueForLanguage(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) % 360;
  }
  return hash;
}

function LanguagesPanel({ languages }) {
  return (
    <div className="rl-panel">
      <h2 className="rl-panel__title">Languages</h2>
      {languages && languages.length > 0 ? (
        <ul className="rl-lang-list">
          {languages.map((language) => (
            <li key={language} className="rl-lang-list__item">
              <span
                className="rl-lang-list__dot"
                style={{ background: `hsl(${hueForLanguage(language)}, 55%, 55%)` }}
                aria-hidden="true"
              />
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
