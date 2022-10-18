FROM node
WORKDIR /app/stats-service

COPY package.json .
RUN npm install

COPY . .
EXPOSE 8002
CMD ["npm", "start"]