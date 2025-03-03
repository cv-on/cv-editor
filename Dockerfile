FROM node:21.2.0

# ENV variables
ENV NODE_ENV=production
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml usy-ui-base*.tgz ./
RUN ls -l
RUN pnpm install
COPY . .
RUN pnpm build

RUN apt-get update && apt-get install gnupg wget -y && \
    wget -q -O- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
    apt-get update && \
    apt-get install google-chrome-stable -y --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

RUN which google-chrome-stable
RUN google-chrome-stable --version

EXPOSE 3000
CMD ["pnpm", "start"]

