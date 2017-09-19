#!/bin/sh
outputFile="docker-webproxy.zip"
amzFile="upload/docker-webproxy.zip"
bucket="schoolcounty"
resource="/${bucket}/${amzFile}"
contentType="application/x-compressed-tar"
dateValue=`date -R`
stringToSign="GET\n\n${contentType}\n${dateValue}\n${resource}"
s3Key="AKIAIRCKYTI64ESMJFHQ"
s3Secret="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"
signature=`echo -en ${stringToSign} | openssl sha1 -hmac ${s3Secret} -binary | base64`

curl  -H "Host: ${bucket}.s3.amazonaws.com" \
     -H "Date: ${dateValue}" \
     -H "Content-Type: ${contentType}" \
     -H "Authorization: AWS ${s3Key}:${signature}" \
     https://${bucket}.s3.amazonaws.com/${amzFile} -o $outputFile
