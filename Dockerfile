FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV PORT 3600
EXPOSE $PORT
CMD ["npm","run","dev"]
