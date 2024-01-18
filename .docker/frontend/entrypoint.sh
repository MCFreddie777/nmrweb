#!/bin/sh
set -e

# Install dependencies
npm clean-install

# Run the main command
exec "$@"
