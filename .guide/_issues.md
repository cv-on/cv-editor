## Delete containers with volumes

- `docker rm -vf $(docker ps -aq)`

## Delete all images

- `docker rmi -f $(docker images -aq)`

## check usage

- df -h
