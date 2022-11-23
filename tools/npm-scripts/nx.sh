#!/bin/bash
set -e

start() {
  set -x
  export APP_NAME=$1 NODE_ENV=production
  node ./dist/apps/$1/main.js
}

serve_prod() {
  set -x
  export APP_NAME=$1
  nx run $1:serve --configuration production
}

serve_dev() {
  set -x
  export APP_NAME=$1
  nx run $1:serve
}

serve_local() {
  set -x
  export APP_NAME=$1 NODE_ENV=local
  nx run $1:serve
}

build_prod() {
  set -x
  export APP_NAME=$1
  nx run $1:build --configuration production
}

build_dev() {
  set -x
  export APP_NAME=$1
  nx run $1:build
}

"$@"
