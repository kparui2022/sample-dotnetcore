#!/bin/bash

##### PEM PERMISSION CHANGE ######
chmod 600 aws-access-key.pem

##### Jenkins- Server Node Install ######
npm config set legacy-peer-deps true
npm install
npm run build-dev

##### Remote Server Document Directory Clean Script ######
ssh -i aws-access-key.pem ubuntu@3.110.165.7 ./jenkins-after-build.sh

##### Move Files From Jenkins To Destination Server ######
cd ..
cd 11DB-vue-test/
scp -i aws-access-key.pem -r dist/* ubuntu@3.110.165.7:/var/www/11-db-demo