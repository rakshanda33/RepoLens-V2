IMPORTANT_FILES = {
    "README.md",
    "README.rst",
    "requirements.txt",
    "pyproject.toml",
    "setup.py",
    "package.json",
    "pom.xml",
    "build.gradle",
    "Dockerfile",
    "docker-compose.yml",
    "docker-compose.yaml",
    "main.py",
    "app.py",
    "server.py",
    "manage.py",
    "index.js",
    "index.ts",
    "main.js",
    "main.ts",
}


def get_major_folders(tree):
    """Return the top-level folders in a repository."""

    folders = set()

    for item in tree:
        path = item["path"]

        if "/" in path:
            top_level_folder = path.split("/")[0]

            if not top_level_folder.startswith("."):
                folders.add(top_level_folder)

    return sorted(folders)


def find_important_files(tree):
    """Find important files using simple priority-based heuristics."""

    root_files = []
    entry_files = []
    source_files = []

    core_folders = ("src/", "app/", "lib/", "backend/", "server/")
    ignored_folders = (
        "tests/",
        "test/",
        "examples/",
        "docs/",
        ".github/",
        "sandbox/",
    )

    entry_file_names = {
        "main.py",
        "app.py",
        "server.py",
        "manage.py",
        "index.js",
        "index.ts",
        "main.js",
        "main.ts",
    }

    source_extensions = (
        ".py",
        ".js",
        ".ts",
        ".java",
        ".jsx",
        ".tsx",
    )

    for item in tree:
        if item["type"] != "blob":
            continue

        path = item["path"]
        file_name = path.split("/")[-1]

        # Ignore tests, documentation, examples, and GitHub configuration
        if path.startswith(ignored_folders):
            continue

        # Priority 1: Important files at repository root
        if "/" not in path and file_name in IMPORTANT_FILES:
            root_files.append(path)

        # Priority 2: Common entry-point files inside core folders
        elif (
            path.startswith(core_folders)
            and file_name in entry_file_names
            and "README" not in file_name
        ):
            entry_files.append(path)

        # Priority 3: Representative source files
        elif (
            path.startswith(core_folders)
            and path.endswith(source_extensions)
            and len(source_files) < 5
        ):
            source_files.append(path)

    selected_files = root_files + entry_files

    # Avoid duplicates while limiting the final context
    for path in source_files:
        if path not in selected_files:
            selected_files.append(path)

        if len(selected_files) >= 8:
            break

    return selected_files

def build_repository_context(
    metadata,
    languages,
    major_folders,
    file_contents,
    max_chars_per_file=4000,
):
    """Build a compact repository context for AI analysis."""

    context = []

    context.append(f"Repository: {metadata['name']}")
    context.append(f"Description: {metadata.get('description')}")
    context.append(
        f"Primary Language: {metadata.get('language')}"
    )

    context.append(
        f"Languages: {', '.join(languages.keys())}"
    )

    context.append(
        f"Major Folders: {', '.join(major_folders)}"
    )

    context.append("\nSelected Files:\n")

    for file_path, content in file_contents.items():
        truncated_content = content[:max_chars_per_file]

        context.append(f"\n--- FILE: {file_path} ---\n")
        context.append(truncated_content)

    return "\n".join(context)