FROM node:20-alpine

# Install necessary dependencies
RUN apk update && apk add --no-cache \
  # Dependencies for Puppeteer and Chromium
  bash \
  curl \
  wget \
  nss \
  freetype \
  harfbuzz \
  ttf-dejavu \
  libx11 \
  libxcomposite \
  libxdamage \
  libxrandr \
  libpng \
  libjpeg \
  libstdc++ \
  udev \
  ttf-freefont \
  --virtual .build-deps \
  && rm -rf /var/cache/apk/*

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "start"]

