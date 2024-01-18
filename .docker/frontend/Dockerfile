FROM node:16

# Copy entrypoint & set permissions
COPY /.docker/frontend/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set work directory
WORKDIR /app

# Copy node package manifests to be installed later
COPY package*.json ./

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm","run","dev"]
