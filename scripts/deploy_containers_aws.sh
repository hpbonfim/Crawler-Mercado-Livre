#!bin/bash
docker swarm init && docker stack deploy --compose-file docker-compose.yml crawler