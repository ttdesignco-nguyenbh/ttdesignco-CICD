#!/bin/bash
set -x

# System control will return eigher "active" or "inactive".

nginx_running=$(systemctl is-active nginx)
if ["$nginx_running" == "active" ]; then
    service nginx stop
fi