import os


def save_report(
    repo_name,
    repo_url,
    analysis,
    interview_questions=None,
):
    """Save the repository analysis and interview questions as a Markdown report."""

    os.makedirs("reports", exist_ok=True)

    file_name = f"{repo_name}_analysis.md"
    file_path = os.path.join("reports", file_name)

    report = f"""# {repo_name} - Repository Analysis

**Repository:** {repo_url}

---

{analysis}
"""

    if interview_questions:
        report += f"""

---

## Interview Questions

{interview_questions}
"""

    with open(file_path, "w", encoding="utf-8") as file:
        file.write(report)

    return file_path