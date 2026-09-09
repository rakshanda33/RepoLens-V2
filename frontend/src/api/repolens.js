const API_BASE_URL = "https://repolens-v2.onrender.com";
/**
 * Calls the RepoLens backend to analyze a public GitHub repository.
 * @param {string} repoUrl - A public GitHub repository URL.
 * @returns {Promise<object>} The analysis payload described in the README.
 */
export async function analyzeRepository(repoUrl) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        repo_url: repoUrl,
        interview_mode: true,
      }),
    });
  } catch {
    throw new Error(
     "Couldn't reach the RepoLens API. Please try again."
    );
  }

  let payload = null;

  try {
    payload = await response.json();
  } catch {
    // Response had no JSON body — fall through to status-based error below.
  }

  if (!response.ok) {
    const detail =
      payload?.detail ||
      "RepoLens couldn't analyze that repository. Please try again.";
    throw new Error(detail);
  }

  return payload;
}
