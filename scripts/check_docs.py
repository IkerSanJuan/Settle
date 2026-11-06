"""Validate required docs and simple relative Markdown file links (not anchors)."""
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit

root = Path(__file__).resolve().parents[1]
required = ["README.md", "CONTRIBUTING.md", "SECURITY.md", "CODE_OF_CONDUCT.md",
            "docs/TEAM.md", "docs/GITHUB_SETUP.md", "docs/INVITAR_EQUIPO.md"]
errors = [f"Missing: {name}" for name in required if not (root / name).is_file()]
for path in root.rglob("*.md"):
    if ".git" in path.parts:
        continue
    content = re.sub(r"```.*?```", "", path.read_text(encoding="utf-8"), flags=re.S)
    for match in re.finditer(r"\[[^\]]*\]\(([^\s)]+)\)", content):
        target = match.group(1).strip("<>")
        parsed = urlsplit(target)
        if parsed.scheme or parsed.netloc or not parsed.path:
            continue
        destination = (path.parent / unquote(parsed.path)).resolve()
        if not destination.is_relative_to(root) or not destination.exists():
            errors.append(f"{path.relative_to(root)}: broken local link {target}")
if errors:
    print("\n".join(errors))
    sys.exit(1)
print("Required documents and relative file links: OK")
