#!/bin/bash
printf "Shanti Chacha "
#scp -o StrictHostKeyChecking=no *.* ubuntu@65.1.84.220:/home/ubuntu/ssh_key
#scp -oStrictHostKeyChecking=no
scp -i aws-access-key.pem *.* arpan@65.1.133.238:/home/arpan/cicd/
