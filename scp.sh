#!/bin/bash
scp -i aws-access-key.pem dist/* ubuntu@13.235.0.2:/var/www/html/vue-js-test/
