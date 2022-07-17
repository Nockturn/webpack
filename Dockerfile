FROM node:16 as build

WORKDIR /usr/src/app

COPY package.json ./
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install

COPY . .
RUN --mount=type=cache,target=./node_modules/.cache/webpack yarn build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80