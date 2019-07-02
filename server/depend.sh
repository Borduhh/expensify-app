#!/bin/bash

cd /home/ec2-user/expensify

sudo /home/ec2-user/.nvm/versions/node/v10.16.0/bin/npm install

# Workaround for Node-Sass error
# https://github.com/sass/node-sass/issues/1579
sudo /home/ec2-user/.nvm/versions/node/v10.16.0/bin/npm rebuild node-sass

sudo /home/ec2-user/.nvm/versions/node/v10.16.0/bin/npm run build:prod