#!/bin/bash
set -xe

# Ensure nginx is running by making an HTTPS browser

nginx_running=$(systemctl is-active nginx)
if ["$nginx_running" == "active" ]; then
    echo "nginx is running"
fi