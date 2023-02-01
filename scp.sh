#!/bin/bash
printf "Shanti Chacha "
scp -i aws-access-key.pem *.* ubuntu@65.1.84.220:/home/ubuntu/ssh_key
