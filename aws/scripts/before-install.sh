#!/bin/bash
set -xe

# Delete the old directory as needed
if [ -d /usr/share/nginx/html/ ]; then
    rm -rf /usr/share/nginx/html/
fi

mkdir -vp /usr/share/nginx/html/