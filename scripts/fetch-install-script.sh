#!/usr/bin/env bash

# Fetch the CLI installer from the darklang/dark repo so the site can serve it
# at /install. The homepage tells people to run
# `curl -fsSL https://darklang.com/install | sh`, and darklang/dark is the
# source of truth for what that script contains, so we copy it at build time
# rather than keeping a second copy in this repo that can drift.

set -euo pipefail

SRC="https://raw.githubusercontent.com/darklang/dark/main/install.sh"
DEST="public/install"

curl -fsSL "$SRC" -o "$DEST"

# A truncated or HTML error page piped into `sh` is worse than a failed build,
# so refuse to ship anything that doesn't parse as a shell script.
sh -n "$DEST"

echo "Fetched $SRC -> $DEST"
