# set the base image to create the image for react app
FROM node:21-alpine3.18

# set the working directory to /app
WORKDIR /app

COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# expose port 5173 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 3000

# command to run the app
CMD npm run dev