#!/usr/bin/env bash

set -euo pipefail

if [[ ! -f scripts/dark-cli-linux ]]; then

  wget -q https://dark-cli.storage.googleapis.com/latest/dark-cli-linux -O scripts/dark-cli-linux
  chmod +x scripts/dark-cli-linux

fi

./scripts/dark-cli-linux public/ --canvas "${CANVAS}" --user "${USER}" --password "${PASSWORD}"

