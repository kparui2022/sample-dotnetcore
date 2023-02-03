#!/bin/bash

##### PEM PERMISSION CHANGE ######
chmod 600 aws-access-key.pem

##### Jenkins Node Install ######
npm config set legacy-peer-deps true
npm install
npm run build-dev

##### Remote Server Document Directory Clean Script ######
ssh -i aws-access-key.pem ubuntu@13.235.77.115 ./var/www/jenkins-after-build.sh

##### Move Files From Jenkins To Destination Server ######
scp -i aws-access-key.pem -r dist/* ubuntu@13.235.77.115:/var/www/html/11DB-test/