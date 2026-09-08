import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function AIAnalysisPanel({ analysis }) {
  return (
    <div className="rl-panel rl-panel--analysis">
      <h2 className="rl-panel__title">AI analysis</h2>
      {analysis ? (
        <div className="rl-markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{analysis}</ReactMarkdown>
        </div>
      ) : (
        <p className="rl-panel__empty">No analysis was returned for this repository.</p>
      )}
    </div>
  );
}

export default AIAnalysisPanel;
