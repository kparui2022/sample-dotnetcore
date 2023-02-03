#!/bin/bash
#ssh -i aws-access-key.pem ubuntu@13.127.196.123
#sudo su
#chown -R ubuntu:ubuntu /var/www/11-db-demo/
#chmod -R 777 /var/www/11-db-demo/
#rm -rf /var/www/11-db-demo/* .*
#exit
sshpass -p "Ol635&zxNxfu" ssh -t root@13.127.196.123 sudo sh /var/www/jenkins-after-build.sh