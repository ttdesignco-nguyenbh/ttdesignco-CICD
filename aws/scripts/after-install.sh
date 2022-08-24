#!/bin/bash
set -xe


# copy forder build from S3 bucket to /home/ec2-user/ttdesignco-cicd
aws s3 cp s3://ttd-develop/ttd-code-upload-S3/build/* /home/ec2-user/ttdesignco-cicd

# Ensure the ownership permissions are correct
# chown -R root.root /home/ec2-user/ttdesignco-cicd