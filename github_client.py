import os
import re
import base64

import requests
from dotenv import load_dotenv


# Load environment variables from the .env file
load_dotenv()


def get_headers():
    """Create headers for GitHub API requests."""

    headers = {
        "Accept": "application/vnd.github+json"
    }

    github_token = os.getenv("GITHUB_TOKEN")

    if github_token:
        headers["Authorization"] = f"Bearer {github_token}"

    return headers


def parse_github_url(url):
    """Extract the repository owner and name from a GitHub URL."""

    pattern = r"github\.com/([^/]+)/([^/]+)"
    match = re.search(pattern, url)

    if not match:
        raise ValueError("Invalid GitHub repository URL.")

    owner = match.group(1)
    repo = match.group(2).replace(".git", "")

    return owner, repo


def get_repo_metadata(owner, repo):
    """Fetch basic repository information from the GitHub API."""

    url = f"https://api.github.com/repos/{owner}/{repo}"

    response = requests.get(
        url,
        headers=get_headers(),
        timeout=10,
    )

    if response.status_code == 404:
        raise ValueError("Repository not found or is private.")

    response.raise_for_status()

    return response.json()


def get_repo_languages(owner, repo):
    """Fetch all languages used in the repository."""

    url = f"https://api.github.com/repos/{owner}/{repo}/languages"

    response = requests.get(
        url,
        headers=get_headers(),
        timeout=10,
    )

    response.raise_for_status()

    return response.json()


def get_repo_tree(owner, repo, branch):
    """Fetch the complete file and folder structure of a repository."""

    url = (
        f"https://api.github.com/repos/{owner}/{repo}"
        f"/git/trees/{branch}?recursive=1"
    )

    response = requests.get(
        url,
        headers=get_headers(),
        timeout=10,
    )

    response.raise_for_status()

    return response.json()


def get_file_content(owner, repo, path, branch):
    """Fetch and decode the content of a single repository file."""

    url = (
        f"https://api.github.com/repos/{owner}/{repo}"
        f"/contents/{path}?ref={branch}"
    )

    response = requests.get(
        url,
        headers=get_headers(),
        timeout=10,
    )

    response.raise_for_status()

    data = response.json()

    if data.get("encoding") != "base64":
        return None

    content = base64.b64decode(data["content"]).decode(
        "utf-8",
        errors="replace",
    )

    return content