# 🔍 RepoLens

RepoLens is an AI-powered Python CLI tool that analyzes public GitHub repositories and explains their codebase in beginner-friendly language.

## 🚀 Features

- Fetches repository data using the GitHub API
- Detects languages, major folders, and important files
- Reads only selected key files for efficient analysis
- Generates:
  - Project summary
  - Tech stack
  - Folder breakdown
  - Reading guide
  - Suggested improvement
- `--interview` mode generates 5 interview questions about the codebase

## 🛠️ Tech Stack

Python • GitHub REST API • Groq API • GPT-OSS • Requests • python-dotenv

## 📁 Project Structure

```text
RepoLens/
├── main.py            # CLI application
├── github_client.py   # GitHub API integration
├── analyzer.py        # Repository analysis
├── ai_analyzer.py     # AI analysis
├── requirements.txt
├── .env.example
└── .gitignore
```

## ⚙️ Installation

```bash
git clone https://github.com/rakshanda33/RepoLens.git
cd RepoLens
python -m venv venv
```

**Windows:**

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
GITHUB_TOKEN=your_github_token
GROQ_API_KEY=your_groq_api_key
```

> Never upload your `.env` file or API keys to GitHub.

## ▶️ Usage

Run:

```bash
python main.py
```

Enter a public repository URL:

```text
https://github.com/pallets/flask
```

### 🎓 Interview Mode

```bash
python main.py --interview
```

Generates the repository analysis plus 5 interview questions.

## 💡 How It Works

1. Fetches repository metadata and structure.
2. Identifies important folders and files.
3. Reads selected files instead of the entire repository.
4. Builds a compact context.
5. Sends it to Groq AI.
6. Generates a beginner-friendly codebase report.

## 🧪 Tested On

- Flask
- Axios

## 🔐 API Keys

- **GitHub Token** — Authenticates GitHub API requests and provides higher rate limits.
- **Groq API Key** — Generates AI-powered repository explanations.

Both are stored locally in `.env` and excluded using `.gitignore`.

## 🚀 Future Improvements

- Save reports as Markdown files
- Support more AI models
- Add a web interface
- Improve codebase and file analysis

---

Built with Python, GitHub API, and Groq AI 🚀