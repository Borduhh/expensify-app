#!/bin/bash

cd /home/ec2-user/expensify
/home/ec2-user/.nvm/versions/node/v10.16.0/bin/pm2 start server/server.js