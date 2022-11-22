#!/bin/bash
set -e

app_name="APP_NAME=www"

start() {
  set -x
  export $app_name NODE_ENV=production
  node ./dist/apps/www/main.js
}

serve_prod() {
  set -x
  export $app_name
  nx run www:serve --configuration production
}

serve_dev() {
  set -x
  export $app_name
  nx run www:serve
}

serve_local() {
  set -x
  export $app_name NODE_ENV=local
  nx run www:serve
}

build_prod() {
  set -x
  export $app_name
  nx run www:build --configuration production
}

build_dev() {
  set -x
  export $app_name
  nx run www:build
}

"$@"
