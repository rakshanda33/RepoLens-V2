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

function InterviewQuestionsPanel({ questions }) {
  const parsed = parseQuestions(questions);

  return (
    <div className="rl-panel rl-panel--analysis">
      <h2 className="rl-panel__title">Interview questions</h2>
      {parsed.length > 0 ? (
        <ol className="rl-question-list">
          {parsed.map((question, index) => (
            <li key={index} className="rl-question-list__item">
              {question}
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
