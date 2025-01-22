FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install vite --save-dev
RUN npm install --save-dev @types/react @types/react-dom

COPY . ./app

EXPOSE 5175

CMD [ "npm", "run", "dev" ]