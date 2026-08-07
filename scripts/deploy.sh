#!/usr/bin/env bash

set -euo pipefail

if [[ ! -f scripts/dark-cli-linux ]]; then

  wget -q https://dark-cli.storage.googleapis.com/latest/dark-cli-linux -O scripts/dark-cli-linux
  chmod +x scripts/dark-cli-linux

fi

# Each branch deploys to its own canvas. Anything other than wip2 keeps going to
# WIP_CANVAS, which is where every deployed branch went before wip2 existed.
case "${CIRCLE_BRANCH:-}" in
  wip2) CANVAS="${WIP2_CANVAS}" ;;
  *) CANVAS="${WIP_CANVAS}" ;;
esac

./scripts/dark-cli-linux dist/ --canvas "${CANVAS}" --user "${USER}" --password "${PASSWORD}"
