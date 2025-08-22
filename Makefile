.PHONY: products-db
products-db:
	docker run --name knive-products -p 27017:27017 -e MONGO_INITDB_DATABASE="knive" -e MONGO_INITDB_ROOT_USERNAME="knive" -e MONGO_INITDB_ROOT_PASSWORD="root" -d mongo


.PHONY: api-db
api-db:
	docker run --name knive-api -p 5432:5432 -e POSTGRES_PASSWORD=password -e POSTGRES_USER=knive  -e POSTGRES_DB=knive -d postgres || docker start knive

.PHONY: api
api:
	cd api && npm run dev

.PHONY: web
web:
	cd web && npm start
