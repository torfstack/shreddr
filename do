#! /bin/bash

IMAGE_NAME="ghcr.io/torfstack/shreddr"

build() {
    VERSION=$(cat version)
    echo "Building version $VERSION"
    docker buildx build . -t "$IMAGE_NAME:$VERSION"
    docker push "$IMAGE_NAME:$VERSION"
}

deploy() {
  check_installed "helm"
  echo "Deploying..."
  helm upgrade --install shreddr deployment --values deployment/values.yaml -f deployment/values.yaml -n default
}

check_installed() {
  if ! command -v "$1" &> /dev/null; then
    echo "$1 is not installed"
    exit 1
  fi
}

start() {
    case "$1" in
      build)
        build
        ;;
      deploy)
        deploy
        ;;
      *)
        echo "Usage: do [build]"
        exit 1
        ;;
    esac
}

start "$@"