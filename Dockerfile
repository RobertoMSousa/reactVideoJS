# use the pm2 alpine docker image
FROM keymetrics/pm2:latest-alpine

# changing working directories
WORKDIR /usr/src/app

# copy package and lock files
COPY package.json yarn.lock ./

# install the dependencies
RUN yarn

# copy all the files to the current directory
COPY . ./

# build the production server
RUN yarn build

# clean the instalation cache
RUN yarn cache clean

#copy the pm2 strating script
COPY pm2.json .

# expose the ports on the container
EXPOSE 4000 4001 4002 5000

# run the pm2 process
CMD [ "pm2-runtime", "start", "pm2.json" ]