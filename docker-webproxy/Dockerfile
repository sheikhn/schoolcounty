#
# Dockerfile for a jmeter client.
# A container from this image will be ready to run a jmeter client.
#
# Usage:
#  docker run -d -p 80:80 artifactory.prodwest.citrixsaassbe.net:5000/loadtest/webproxy-docker
#
FROM artifactory.prodwest.citrixsaassbe.net:5000/loadtest/webproxy-docker:base
MAINTAINER Nuruddin Sheikh <sheikh.nuruddin@logmein.com>

ENV docker_path=.
ADD ./docker-webproxy/s3_nodejs_upload /s3_nodejs_upload 
   
RUN echo $'<VirtualHost *:80> \n\
    ServerName atlasresults.serversdev.getgo.com \n\
    Header always set Access-Control-Allow-Origin "*" \n\
    Header always set Access-Control-Max-Age "5000" \n\
    Header always set Access-Control-Allow-Headers "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding" \n\
    Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT" \n\
    #Header set Access-Control-Allow-Origin "*" \n\

    SSLProxyEngine On \n\
    SSLProxyCheckPeerCN on \n\
    SSLProxyCheckPeerExpire on \n\
    #ProxyPreserveHost On \n\
      
    ProxyPass /atlas-loadtest/ https://s3-us-west-1.amazonaws.com/atlas-loadtest/ \n\
    ProxyPassReverse /atlas-loadtest https://s3-us-west-1.amazonaws.com/atlas-loadtest/ \n\
     
    ProxyPass / http://localhost:5000/ \n\
    ProxyPassReverse / http://localhost:5000/ \n\    
</VirtualHost>' |sudo tee -a /etc/httpd/conf/httpd.conf

RUN sudo echo 'LoadModule ssl_module modules/mod_ssl.so' >> /etc/httpd/conf.modules.d/00-proxy.conf
EXPOSE 80 8080 5000

# Simple startup script to avoid some issues observed with container restart
ADD ./docker-webproxy/run-httpd.sh /run-httpd.sh
RUN chmod -v +x /run-httpd.sh

CMD ["/run-httpd.sh"]