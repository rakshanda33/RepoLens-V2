import RepoOverview from "./RepoOverview.jsx";
import LanguagesPanel from "./LanguagesPanel.jsx";
import FoldersPanel from "./FoldersPanel.jsx";
import ImportantFilesPanel from "./ImportantFilesPanel.jsx";
import AIAnalysisPanel from "./AIAnalysisPanel.jsx";
import InterviewQuestionsPanel from "./InterviewQuestionsPanel.jsx";

function DashboardView({ result, repoUrl }) {
  const {
    repository,
    languages,
    major_folders: majorFolders,
    important_files: importantFiles,
    analysis,
    interview_questions: interviewQuestions,
  } = result;

  return (
    <section className="rl-dashboard">
      <RepoOverview repository={repository} repoUrl={repoUrl} />

      <div className="rl-dashboard__grid">
        <aside className="rl-dashboard__sidebar">
          <LanguagesPanel languages={languages} />
          <FoldersPanel folders={majorFolders} />
          <ImportantFilesPanel files={importantFiles} />
        </aside>

        <div className="rl-dashboard__main">
          <AIAnalysisPanel analysis={analysis} />
          {interviewQuestions && (
            <InterviewQuestionsPanel questions={interviewQuestions} />
          )}
        </div>
      </div>
    </section>
  );
}

export default DashboardView;
