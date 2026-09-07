import os

from groq import Groq
from dotenv import load_dotenv


load_dotenv()


MODEL_NAME = "openai/gpt-oss-20b"


def get_groq_client():
    """Create and return a Groq client."""

    api_key = os.getenv("GROQ_API_KEY")

    if not api_key:
        raise ValueError(
            "GROQ_API_KEY not found. "
            "Add it to your .env file."
        )

    return Groq(api_key=api_key)


def analyze_repository(repository_context):
    """Analyze a GitHub repository using Groq AI."""

    client = get_groq_client()

    prompt = f"""
You are a senior software engineer helping a beginner understand
an unfamiliar GitHub repository.

Analyze the repository information and selected source files below.

Return your response using exactly these sections:

## Project Summary
Explain what the project does in one beginner-friendly paragraph.

## Tech Stack
List the main technologies, languages, frameworks, and important tools
that are explicitly visible in the Repository Context.

## Folder Breakdown
Explain the purpose of each major folder using only the information
available in the Repository Context.

## Where to Start Reading
Recommend the 3 most important files from the SELECTED FILES.
Explain briefly why each file is useful to understand the project.

## Suggested Improvement
Suggest one realistic technical improvement based only on the code
and information provided.

IMPORTANT:
- Only use information explicitly provided in the Repository Context.
- Do not invent files, folders, technologies, dependencies, features,
  architecture, or implementation details.
- Do not assume something exists because it is common in similar projects.
- If information is missing, clearly say that it could not be determined
  from the selected repository files.

Repository Context:
{repository_context}
"""

    response = client.chat.completions.create(
        model=MODEL_NAME,
        max_tokens=1500,
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
    )

    return response.choices[0].message.content


def generate_interview_questions(repository_context):
    """Generate 5 repository-specific technical interview questions."""

    client = get_groq_client()

    prompt = f"""
You are a senior software engineer conducting a technical interview
about the GitHub repository described below.

Generate EXACTLY 5 technical interview QUESTIONS.

STRICT RULES:
- Every item MUST be a question.
- Every item MUST end with a question mark (?).
- Do NOT provide answers.
- Do NOT provide explanations.
- Do NOT provide statements.
- Do NOT start an item with phrases like:
  "The code uses...", "The application...", "This means...",
  "The reason is...", or "It uses..."
- Ask questions that require the candidate to explain or reason
  about the actual repository.
- Questions must be specific to the files, technologies,
  architecture, or implementation visible in the Repository Context.
- Do not invent files, technologies, features, or implementation details.
- Do not ask generic programming questions.
- Keep each question concise and under 2 sentences.

Good examples:
1. Why does SecurityConfig permit the /login and /register endpoints without authentication?
2. How does LoginController use passwordEncoder.matches() to verify a user's password?
3. What role does JwtService play in the authentication flow?

Bad examples:
1. LoginController uses passwordEncoder.matches() to verify passwords.
2. The application uses JWT authentication.
3. PostgreSQL stores the users.

Return ONLY this format:

1. Question?
2. Question?
3. Question?
4. Question?
5. Question?

Repository Context:
{repository_context}
"""

    response = client.chat.completions.create(
        model=MODEL_NAME,
        max_tokens=1000,
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
    )

    return response.choices[0].message.content