#!/bin/bash
printf "Shanti Chacha "
scp -i aws-access-key.pem *.* arpan@65.1.84.220:/home/ubuntu/ssh_key
ssh -oStrictHostKeyChecking=no ip-172-31-37-240
