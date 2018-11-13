FROM keymetrics/pm2:latest-alpine


# Create dir for app
RUN mkdir app

# Expose containers port
EXPOSE 3000


# Install app dependencies
WORKDIR app/
ENV NPM_CONFIG_LOGLEVEL warn
CMD npm install --production

# Start pm2 instance at runtime
CMD [ "pm2-runtime", "start", "pm2.json" ]