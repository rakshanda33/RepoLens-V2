import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function AIAnalysisPanel({ analysis }) {
  return (
    <div className="rl-panel rl-panel--analysis rl-panel--journal">
      <div className="rl-panel__header">
        <h2 className="rl-panel__title rl-panel__title--loud">AI Explorer&apos;s Journal</h2>
        <span className="rl-panel__subtitle">What RepoLens found while reading the codebase</span>
      </div>
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
