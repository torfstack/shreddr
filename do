#! /bin/bash

IMAGE_NAME="ghcr.io/torfstack/shreddr"

build() {
    VERSION=$(cat version)
    echo "Building version $VERSION"
    docker buildx build . -t "$IMAGE_NAME:$VERSION"
    docker push "$IMAGE_NAME:$VERSION"
}

start() {
    case "$1" in
      build)
        build
        ;;
      *)
        echo "Usage: do [build]"
        exit 1
        ;;
    esac
}

start "$@"