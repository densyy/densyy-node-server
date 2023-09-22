#!/bin/bash

docker network create \
  --driver=overlay traefik-public

export NODE_ID=$(docker info -f '{{.Swarm.NodeID}}')

docker node update \
  --label-add traefik-public.traefik-public-certificates=true $NODE_ID

docker stack deploy \
  --compose-file stack-traefik.yml \
  --with-registry-auth \
  --resolve-image changed traefik

docker stack deploy \
  --compose-file stack-backend.yml \
  --with-registry-auth \
  --resolve-image changed backend
