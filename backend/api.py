from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from backend.github_client import (
    parse_github_url,
    get_repo_metadata,
    get_repo_languages,
    get_repo_tree,
    get_file_content,
)

from backend.analyzer import (
    get_major_folders,
    find_important_files,
    build_repository_context,
)

from backend.ai_analyzer import (
    analyze_repository,
    generate_interview_questions,
)


app = FastAPI(
    title="RepoLens API",
    description="AI-powered GitHub repository analyzer",
    version="2.0.0",
)


class AnalyzeRequest(BaseModel):
    repo_url: str
    interview_mode: bool = True


@app.get("/")
def root():
    return {
        "message": "RepoLens API is running!"
    }


@app.post("/analyze")
def analyze_repo(request: AnalyzeRequest):

    try:
        # 1. Parse GitHub URL
        owner, repo = parse_github_url(
            request.repo_url
        )

        # 2. Get repository metadata
        metadata = get_repo_metadata(
            owner,
            repo
        )

        branch = metadata["default_branch"]

        # 3. Get repository languages
        languages = get_repo_languages(
            owner,
            repo
        )

        # 4. Get repository structure
        tree_data = get_repo_tree(
            owner,
            repo,
            branch
        )

        tree = tree_data["tree"]

        # 5. Analyze repository structure
        major_folders = get_major_folders(tree)

        important_files = find_important_files(tree)

        # 6. Fetch selected file contents
        selected_file_contents = {}

        for file_path in important_files:

            content = get_file_content(
                owner,
                repo,
                file_path,
                branch
            )

            if content:
                selected_file_contents[file_path] = content

        # 7. Build context for AI
        repository_context = build_repository_context(
            metadata,
            languages,
            major_folders,
            selected_file_contents,
        )

        # 8. Generate AI analysis
        analysis = analyze_repository(
            repository_context
        )

        # 9. Generate interview questions
        interview_questions = None

        if request.interview_mode:
            interview_questions = (
                generate_interview_questions(
                    repository_context
                )
            )

        # 10. Send response to frontend
        return {
            "repository": {
                "name": metadata["name"],
                "description": metadata.get("description"),
                "primary_language": metadata.get("language"),
                "default_branch": branch,
            },
            "languages": list(languages.keys()),
            "major_folders": major_folders,
            "important_files": important_files,
            "analysis": analysis,
            "interview_questions": interview_questions,
        }

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error)
        )

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error)
        )