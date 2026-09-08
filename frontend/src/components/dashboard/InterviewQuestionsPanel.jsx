/**
 * The backend returns interview questions as freeform text, typically
 * formatted as a numbered list ("1. Question?\n2. Question?\n..."). This
 * parses that into a clean array, falling back gracefully if the model
 * returns something slightly different.
 */
function parseQuestions(raw) {
  if (!raw) return [];

  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^\d+[.)]\s*/, "").replace(/^[-*]\s*/, ""))
    .filter((line) => line.length > 0);
}

function questNumber(index) {
  return String(index + 1).padStart(2, "0");
}

function InterviewQuestionsPanel({ questions }) {
  const parsed = parseQuestions(questions);

  return (
    <div className="rl-panel rl-panel--quests">
      <div className="rl-panel__header">
        <h2 className="rl-panel__title rl-panel__title--loud">Interview Quests</h2>
        <span className="rl-panel__subtitle">Test what you&apos;ve learned about this repository</span>
      </div>

      {parsed.length > 0 ? (
        <ol className="rl-quest-grid">
          {parsed.map((question, index) => (
            <li key={index} className="rl-quest-card">
              <span className="rl-quest-card__label rl-mono">Quest {questNumber(index)}</span>
              <p className="rl-quest-card__question">{question}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p className="rl-panel__empty">
          No interview questions were generated for this repository.
        </p>
      )}
    </div>
  );
}

export default InterviewQuestionsPanel;
