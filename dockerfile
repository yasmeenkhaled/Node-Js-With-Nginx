FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4000
CMD ["node", "index.js"]
