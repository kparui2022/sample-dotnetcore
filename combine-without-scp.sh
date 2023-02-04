#!/bin/bash

##### PEM PERMISSION CHANGE ######
chmod 600 aws-access-key.pem

##### Jenkins- Server Node Install ######
npm config set legacy-peer-deps true
npm install
npm run build-dev

##### Remote Server Document Directory Clean Script ######
ssh -i aws-access-key.pem ubuntu@3.110.165.7 ./jenkins-after-build.sh