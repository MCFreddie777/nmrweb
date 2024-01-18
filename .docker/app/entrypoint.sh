#!/bin/sh
set -e

# Install dependencies
composer install

# Run the main command
exec "$@"
