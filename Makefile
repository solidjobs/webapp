up:
	@docker-compose up -d || docker compose up -d
	@echo "- Access here to SolidJobs web: http://localhost:4200/"

down:
	@docker-compose down || docker compose down

build:
	@docker-compose run -it web ng build --prod || docker compose run -it web ng build --prod
