FROM node:16 as builder

RUN npm install -g expo-cli

WORKDIR /
COPY package.json yarn.lock /
RUN yarn install
COPY . .
RUN yarn build:web

FROM nginx:1.21.6-alpine
COPY --from=builder web-build /usr/share/nginx/html
COPY --from=builder nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder set_env.sh /set_env.sh

EXPOSE 80

ENTRYPOINT /set_env.sh /usr/share/nginx/html && nginx -g "daemon off;"