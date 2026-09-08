# 🔍 RepoLens V2

> **Understand Any GitHub Repository.**

RepoLens is an AI-powered web application that analyzes public GitHub repositories and explains their codebase in a beginner-friendly way.

Enter a GitHub repository URL and get its **structure, important files, tech stack, AI-powered explanation, and repository-specific technical interview questions**.

## ✨ Features

* 🔗 Analyze public GitHub repositories
* 🗺️ Repository folder map
* 📄 Identify important files
* 🤖 AI-powered codebase explanation
* 🛠️ Automatic tech stack detection
* 🎯 5 repository-specific interview questions
* ⚡ Interactive React dashboard

## 🛠️ Tech Stack

| Layer        | Technology                   |
| ------------ | ---------------------------- |
| **Frontend** | React, Vite, JavaScript, CSS |
| **Backend**  | Python, FastAPI              |
| **AI**       | Groq API, GPT-OSS            |
| **APIs**     | GitHub REST API              |

## 🏗️ Architecture

```text
React Frontend
      ↓
FastAPI Backend
      ↓
GitHub API + Groq AI
      ↓
Repository Analysis
      ↓
React Dashboard
```

## 📁 Project Structure

```text
RepoLens-V2/
├── backend/
│   ├── api.py
│   ├── main.py
│   ├── github_client.py
│   ├── analyzer.py
│   ├── ai_analyzer.py
│   └── report_generator.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .env
├── .env.example
├── .gitignore
├── README.md
└── requirements.txt
```

## ⚙️ Setup

### 1. Backend

Create a virtual environment:

```powershell
python -m venv venv
```

Activate it:

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```powershell
pip install -r requirements.txt
```

Create a `.env` file in the project root:

```env
GITHUB_TOKEN=your_github_token
GROQ_API_KEY=your_groq_api_key
```

Run the backend:

```powershell
uvicorn backend.api:app --reload
```

Backend will be available at:

```text
http://127.0.0.1:8000
```

### 2. Frontend

Open a new terminal:

```powershell
cd frontend
npm install
npm run dev
```

Frontend will be available at:

```text
http://localhost:5173
```

## 🔄 How It Works

1. User enters a GitHub repository URL.
2. FastAPI receives the repository URL.
3. RepoLens fetches repository data using the GitHub REST API.
4. Important files and repository structure are identified.
5. Repository context is prepared for AI analysis.
6. Groq AI analyzes the codebase.
7. RepoLens generates explanations and technical interview questions.
8. Results are displayed on the React dashboard.

## 🚀 Future Plans

* 💬 AI chat with repositories
* 🧩 Interactive architecture visualization
* 🔎 File-level code explanations
* 📝 Report export
* 🎤 Interactive interview preparation
* ☁️ Production deployment

## 📌 Environment Variables

The following environment variables are required:

```env
GITHUB_TOKEN=your_github_token
GROQ_API_KEY=your_groq_api_key
```

> ⚠️ Never commit your `.env` file or expose your API keys publicly.

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to fork the repository, create a feature branch, and submit a pull request.

---

Built with **React, Python, FastAPI, GitHub API & Groq AI** 🚀
