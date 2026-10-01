# 🔍 RepoLens V2

> **Understand any GitHub repository.**

AI-powered web app for exploring and understanding public GitHub repositories through an interactive dashboard.

🔗 **Live Demo:** https://repo-lens-v2.vercel.app/

## ✨ Features

* 🔗 Analyze public GitHub repositories
* 📊 Repository overview & metadata
* 📁 Explore folders and project structure
* 💻 Detect programming languages
* 📄 Identify important files
* 🤖 AI-powered codebase analysis
* 📖 AI Explorer's Journal
* 🎯 Generate 5 repository-specific interview questions

## 🛠️ Tech Stack

| Category     | Technologies                         |
| ------------ | ------------------------------------ |
| **Frontend** | `React.js` `Vite` `JavaScript` `CSS` |
| **Backend**  | `Python` `FastAPI`                   |
| **AI**       | `Groq API` `GPT-OSS`                 |
| **API**      | `GitHub REST API`                    |

## 🏗️ Architecture

```text
React + Vite
     ↓
FastAPI
     ↓
GitHub REST API + Groq AI
     ↓
Repository Analysis
     ↓
Interactive Dashboard
```

## ⚙️ Setup

### Backend

```bash
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn backend.api:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Create `.env` in the project root:

```env
GITHUB_TOKEN=your_github_token
GROQ_API_KEY=your_groq_api_key
```

## 🔐 Note

> ⚠️ Never commit your `.env` file or expose API keys.
> Verify directory paths, configuration, and environment variable names against your local setup before running.

## 🚧 Coming Next

* 💬 Repository AI chat
* 🧩 Architecture visualization
* 🔎 File-level explanations
* 📝 Report export

## 👩‍💻 Author

**Rakshanda Noor**
B.Tech Computer Science & Engineering, Jamia Hamdard

[GitHub](https://github.com/rakshanda33) · [LinkedIn](https://linkedin.com/in/rakshanda-noor-9aaa24291/)

---

<div align="center">

Built with React · FastAPI · GitHub REST API · Groq AI

</div>
