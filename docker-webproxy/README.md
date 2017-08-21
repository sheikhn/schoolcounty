docker-webproxy: CentOS Docker for Apache httpd web proxy and node.js
=============
docker for apache web proxy to browse and upload report artifacts on aws s3 atlas-loadtest bucket. Once docker started, browse and uplaod on s3 bucket can be done via-
Browse s3: http://atlasresults.serversdev.getgo.com/atlas-loadtest/index.html
Upload to s3:  http://atlasresults.serversdev.getgo.com/ 

Configuration Steps:
1. Build jenkins job to publish docker-webproxy image to artifactory: 
https://jenkins1.prodwest.citrixsaassbe.net/jenkins/job/Loadtest/job/Atlas_Framework/job/atlas-webproxy-docker/
2. Configure web proxy host: atlasresults.serversdev.getgo.com
	* Route53 dns setting for web proxyhost 10.226.9.248: https://console.aws.amazon.com/route53/home?region=us-west-2#
3. Build and run docker on web proxy host:
# docker pull artifactory.prodwest.citrixsaassbe.net:5000/loadtest/webproxy-docker:latest
# docker run -d -p 80:80 -e S3_ACCESS_KEY=XXXX -e S3_SECRET_KEY=XXXX -e S3_BUCKET=atlas-loadtest -e S3_REGION=us-west-1  artifactory.prodwest.citrixsaassbe.net:5000/loadtest/webproxy-docker:latest
3. Access s3 report artifacts via docker web proxy
	* Upload artifacts: http://atlasresults.serversdev.getgo.com/
	* Browse artifacts: http://atlasresults.serversdev.getgo.com/atlas-loadtest/index.html

* Validation steps to run locally:
- Build Docker from docker-webproxy directory:   docker build --rm -t <username>/httpd .
- Run docker: docker run -d -p 80:80 <username>/httpd
- Test webproxy browse s3: http://<localhost|hostname>/atlas-loadtest/index.html
- Test webproxy upload artifacts to s3: http://<localhost|hostname>:5000/

Implementation Details:
#Apache Webproxy:
* html/index.html and html/list.js uploaded to s3 atlas-loadtest bucket location: https://console.aws.amazon.com/s3/home?region=us-west-2#&bucket=atlas-loadtest&prefix=
* webproxy configuration:
- configured to access s3 atlas-loadtest bucket index.html which executes list.js to get directory listing of s3 atlas-loadtest bucket
- install apache http, mod_ssl module, node.js, express
- configured reverse proxy in /etc/httpd/conf/httpd.conf with SSLProxyEngine as below:
<VirtualHost *:80>
    ServerName atlasresults.serversdev.getgo.com

    SSLProxyEngine On
    SSLProxyCheckPeerCN on
    SSLProxyCheckPeerExpire on
    #redirect to s3 atlas-loadtest bucket
    ProxyPass /atlas-loadtest/ https://s3-us-west-1.amazonaws.com/atlas-loadtest/
    ProxyPassReverse /atlas-loadtest https://s3-us-west-1.amazonaws.com/atlas-loadtest/
    #redirect to node.js configured to upload to s3 atlas-loadtest bucket
    ProxyPass / https://localhost:5000/ 
    ProxyPassReverse / https://localhost:5000/
</VirtualHost>
- enable ssl_module in /etc/httpd/conf.modules.d/00-proxy.conf 
- start webproxy and node.js: /run-httpd.sh
- Access directory listing of s3 atlas-loadtest via webproxy: http://atlasresults.serversdev.getgo.com/atlas-loadtest/index.html
* configure DNS and map webproxy IP in aws route 53: https://console.aws.amazon.com/route53/home?region=us-west-2#
atlasresults.serversdev.getgo.com -> <IP of docker-webproxy container>
* Configure s3 atlas-bucket to allow docker-webproxy access:
- Allow only webproxy access to the bucket in https://console.aws.amazon.com/s3/home?region=us-west-2#&bucket=atlas-loadtest&prefix=:
{
	"Version": "2012-10-17",
	"Id": "Policy1487031322852",
	"Statement": [
		{
			"Sid": "PublicListGet",
			"Effect": "Allow",
			"Principal": "*",
			"Action": [
				"s3:List*",
				"s3:Get*"
			],
			"Resource": [
				"arn:aws:s3:::atlas-loadtest",
				"arn:aws:s3:::atlas-loadtest/*"
			],
			"Condition": {
				"IpAddress": {
					"aws:SourceIp": [
						"52.53.233.43/32"
					]
				}
			}
		}
	]
}
- Update CORS policy in https://console.aws.amazon.com/s3/home?region=us-west-2#&bucket=atlas-loadtest&prefix=
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <AllowedMethod>HEAD</AllowedMethod>
    <MaxAgeSeconds>5000</MaxAgeSeconds>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>

*Configure Node.js inside docker webproxy:
- install Node.js: 
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum install -y nodejs && \
yum install -y gcc-c++ make
- install express for s3 policy configuration and policy encryption
npm install express
- Add Node.js proxy for s3 access:
copy ./docker-webproxy/s3_nodejs_upload /s3_nodejs_upload 
- start Node.js with env variables and listen on port 5000:
node /s3_nodejs_upload/server.js
- Configure Node.js redirect via apache proxy conf in /etc/httpd/conf/httpd.conf
ProxyPass / https://localhost:5000/ 
ProxyPassReverse / https://localhost:5000/
- Access upload url:
http://atlasresults.serversdev.getgo.com/

