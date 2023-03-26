up:
	@docker-compose up -d || docker compose up -d
	@echo "- Access here to SolidJobs web: http://localhost:4200/"

down:
	@docker-compose down || docker compose down

shell:
	@docker-compose run -it solidjobs-web bash || docker compose run -it solidjobs-web bash

build:
	@docker-compose run -it solidjobs-web ng build --prod || docker compose run -it solidjobs-web ng build --prod
