From postgres:latest
LABEL maintainer="khamar.syed@ismiletechnologies.com"
RUN apt-get update && apt-get install -y vim nano
EXPOSE 5432
CMD [ "postgres", "-g", "daemon off;" ]