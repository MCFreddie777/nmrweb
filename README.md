# NMRweb

Basic template for Laravel project with Vue in Docker container

## Prerequisites

- [Docker](https://www.docker.com/get-started/)

## Installation

### 1. Create .env file and fill env variables

- Copy the `.env.example` file and rename it to `.env`.

  ```shell
  cp .env.example .env
  ```

### 2. Build the images run containers

- Open terminal in the project root folder and run:

  ```shell
  docker compose up --build -d
  ```

  The `--build` option forces docker to rebuild the images in case they were already built and are cached.

### 3. Generate secret

  ```shell
  docker compose run --rm app php artisan key:generate
  ```

### 4. Run database migrations

  ```shell
  docker compose run --rm app php artisan migrate
  ```

### 5. Seed some dummy data (optional)

  ```shell
  docker compose run --rm app php artisan db:seed
  ```

## Development

- Open terminal in the project root folder and run the containers:

  ```shell
  docker compose up -d
  ```

- Visit the webpage in browser - [http://localhost:8080](http://localhost:8080)
