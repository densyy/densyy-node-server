FROM densyy/base-node:latest

WORKDIR /home

# ENVS
ENV DIR_REPO=/home/densyy-node-server

# API
RUN git clone https://github.com/densyy/densyy-node-server.git
RUN rm -rf ${DIR_REPO}/node_modules
RUN rm -rf ${DIR_REPO}/.git
RUN (cd densyy-node-server && pnpm install --prod)

ENTRYPOINT pm2-runtime start ${DIR_REPO}/index.js --name API --cron "0 4 * * *"
