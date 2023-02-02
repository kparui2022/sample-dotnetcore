#!/bin/bash
printf "Shanti Chacha "
#scp -o StrictHostKeyChecking=no *.* ubuntu@65.1.84.220:/home/ubuntu/ssh_key
#scp -oStrictHostKeyChecking=no
scp -i aws-access-key.pem *.* ubuntu@13.235.0.2:/home/ubuntu/cicd
