#!/bin/bash
# Auto-push script — commits all changes and pushes to GitHub.
# Usage: bash scripts/auto-push.sh "commit message"
#
# If no message is provided, generates one from the changed files.

set -e

cd /home/z/my-project

# Check if there are any changes
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "No changes to push."
  exit 0
fi

# Generate commit message if not provided
if [ -z "$1" ]; then
  CHANGED=$(git diff --name-only HEAD 2>/dev/null | head -5)
  MSG="Auto-update: $(echo "$CHANGED" | tr '\n' ', ' | sed 's/,$//')"
else
  MSG="$1"
fi

# Stage all changes
git add -A

# Commit
git commit -m "$MSG" --no-verify 2>&1 | tail -3

# Push using stored credentials (set up via git remote)
git push origin main 2>&1 | tail -3

echo ""
echo "✓ Pushed to GitHub: https://github.com/allansebastian2002-eng/MyPortfolio"
