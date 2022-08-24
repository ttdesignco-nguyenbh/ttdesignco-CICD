#!/bin/bash
set -xe

# Delete the old directory as needed
if [ -d /home/ec2-user/ttdesignco-cicd ]; then
    rm -rf /home/ec2-user/ttdesignco-cicd/
fi

mkdir -vp /home/ec2-user/ttdesignco-cicd