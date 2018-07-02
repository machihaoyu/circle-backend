FROM nginx
MAINTAINER REELAI
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY ./  /usr/share/nginx/html/
COPY nginx.conf   /etc/nginx/
COPY default.conf /etc/nginx/conf.d/
