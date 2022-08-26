#!/bin/bash
set -xe


# copy forder build from S3 bucket to /home/ec2-user/ttdesignco-cicd
mv /home/ec2-user/TTD/TTD/ttdesignco-cicd/ttdesignco-cicd/build/* /usr/share/nginx/html/

# Ensure the ownership permissions are correct
# chown -R root.root /home/ec2-user/ttdesignco-cicd