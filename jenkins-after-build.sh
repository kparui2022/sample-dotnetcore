#!/bin/bash
chown -R ubuntu:ubuntu /var/www/11-db-demo/
chmod -R 777 /var/www/11-db-demo/
rm -rf /var/www/11-db-demo/* .*
exit