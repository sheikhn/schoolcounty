#!/bin/bash

# Make sure we're not confused by old, incompletely-shutdown httpd
# context after restarting the container.  httpd won't start correctly
# if it thinks it is already running.
rm -rf /run/httpd/* /tmp/httpd*
rm -rf /run/node/* /tmp/node*

# Need below env variable to ve setup inside docker
#env S3_ACCESS_KEY=XXXX S3_SECRET_KEY=XXXX S3_BUCKET=atlas-loadtest S3_REGION=us-west-1 
exec /usr/sbin/apachectl & node /s3_nodejs_upload/server.js
