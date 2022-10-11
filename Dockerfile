# use this image
FROM node:18.10-alpine3.15
# tell docker create directory
WORKDIR /app

# copy package.json into the created app directory
COPY package.json package.json
# install dependencies
RUN npm i 
# copy everything into app directory
COPY . .

CMD ["npm", "run", "dev"]