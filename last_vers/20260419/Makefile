all: help

help: ## Show this help
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

run: down ## Run project using docker-compose
	docker-compose up

down:
	docker-compose down

stop:
	docker-compose stop

logs:
	docker-compose logs -f web

restart: stop run

# shell: ## Run shell on rails container
# docker-compose exec web bash || docker-compose run --rm --entrypoint /bin/bash web

shell: ## Run shell on rails container with ssh-keys
	docker-compose run --rm web ssh-agent /bin/bash -i -c "ssh-add; bash -i"

