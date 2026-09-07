import sys

from github_client import (
    parse_github_url,
    get_repo_metadata,
    get_repo_languages,
    get_repo_tree,
    get_file_content,
)

from analyzer import (
    get_major_folders,
    find_important_files,
    build_repository_context,
)

from ai_analyzer import (
    analyze_repository,
    generate_interview_questions,
)

from report_generator import save_report


def main():
    # Check whether interview mode was requested
    interview_mode = "--interview" in sys.argv

    repo_url = input("Enter a public GitHub repository URL: ")

    try:
        # Extract owner and repository name
        owner, repo = parse_github_url(repo_url)

        print(f"\nFetching repository: {owner}/{repo}")

        # Fetch repository metadata
        metadata = get_repo_metadata(owner, repo)

        print("\nRepository Information")
        print("-" * 30)
        print(f"Name: {metadata['name']}")
        print(f"Description: {metadata.get('description')}")
        print(f"Primary Language: {metadata.get('language')}")
        print(f"Default Branch: {metadata.get('default_branch')}")

        # Fetch languages
        languages = get_repo_languages(owner, repo)

        print("\nLanguages")
        print("-" * 30)

        for language in languages:
            print(f"- {language}")

        # Fetch repository tree
        branch = metadata["default_branch"]

        tree_data = get_repo_tree(
            owner,
            repo,
            branch,
        )

        tree = tree_data["tree"]

        # Analyze major folders
        major_folders = get_major_folders(tree)

        print("\nMajor Folders")
        print("-" * 30)

        if major_folders:
            for folder in major_folders:
                print(f"- {folder}/")
        else:
            print("No major folders found.")

        # Find important files
        important_files = find_important_files(tree)

        print("\nImportant Files")
        print("-" * 30)

        if important_files:
            for file_path in important_files:
                print(f"- {file_path}")
        else:
            print("No important files found.")

        # Fetch contents of selected important files
        print("\nFetching Selected File Contents")
        print("-" * 30)

        selected_file_contents = {}

        for file_path in important_files:
            print(f"Fetching: {file_path}")

            content = get_file_content(
                owner,
                repo,
                file_path,
                branch,
            )

            if content:
                selected_file_contents[file_path] = content

        print(
            f"\nSuccessfully fetched "
            f"{len(selected_file_contents)} files."
        )

        # Build compact context for AI analysis
        repository_context = build_repository_context(
            metadata,
            languages,
            major_folders,
            selected_file_contents,
        )

        print("\nRepository context prepared for AI analysis.")
        print(
            f"Context size: "
            f"{len(repository_context)} characters"
        )

        # Analyze repository with AI
        print("\nAnalyzing repository with Groq AI...")
        print("-" * 30)

        analysis = analyze_repository(
            repository_context
        )

        print("\nAI Repository Analysis")
        print("=" * 50)
        print(analysis)

        # Generate interview questions if interview mode is enabled
        interview_questions = None

        if interview_mode:
            print(
                "\nGenerating repository-specific "
                "interview questions..."
            )
            print("-" * 30)

            interview_questions = generate_interview_questions(
                repository_context
            )

            print("\nInterview Questions")
            print("=" * 50)
            print(interview_questions)

        # Save the report
        report_path = save_report(
            metadata["name"],
            repo_url,
            analysis,
            interview_questions,
        )

        print("\nReport saved successfully!")
        print(f"Location: {report_path}")

    except ValueError as error:
        print(f"\nError: {error}")

    except Exception as error:
        print(f"\nUnexpected error: {error}")


if __name__ == "__main__":
    main()