ssh-keygen -t rsa -b 4096 -C "your_email"

ssh -i .\deploy\InnoLabKey.pem ubuntu@ec2-35-182-204-3.ca-central-1.compute.amazonaws.com
mkdir remoteRepo
cd remoteRepo
sudo git init --bare

git remote remove deploy
git remote add deploy ssh://ubuntu@ec2-35-182-204-3.ca-central-1.compute.amazonaws.com/home/ubuntu/repo

git add .
git commit -m "Added remote reop on EC2 "
//Only first time to snyc repo
git push deploy +master:refs/head/master

git branch all

///For any changes to dev branch pull changes to master
git pull 
npm i && 
cd client/v2/askSage/ && 
npm i && 
ng build --prod --build-optimizer --base-href /asksage &&
cd /home/ubuntu/asksage &&
pm2 restart all

pm2 start deploy/deploy.json -prod


pm2 -n AskSage start -i max server/server.js -prod





///ngnix

/etc/nginx/sites-available
 sudo /etc/init.d/ngnix reload or
 systemctl status nginx
 sudo systemctl restart nginx

 /etc/hosts


 ng build --prod --base-href /asksage 

ng g c /FrontEndComponents/footer
ng g c /FrontEndComponents/register
ng g c /FrontEndComponents/chat
ng g c /FrontEndComponents/news
ng g c /FrontEndComponents/feedback

ng serve --proxy-config proxyconfig.json


ng build --prod --build-optimizer --base-href /asksage 
node_modules/.bin/source-map-explorer dist/main.*.bundle.js

//Middleware was below earlier 
  "loopback#static" : {
      "params" : "$!../client/v2/askSage/dist/askSage"
    }
//component-config.json
{
    "mountPath": "/explorer",
    "generateOperationScopedModels": true
  }

ng build --prod --build-optimizer --base-href /asksage 

//Other options not used
ng g c /FrontEndComponents/news --spec false --flat true


ng g s /Services/News
ng g s /Services/Picture

localStorage.userId = "jhgadshgfdhadsf"
localStorage.token = "jhgadshgfdhadsf"


Search Companies  -> Create a Group  Add Companies to group -> Call Search 


NODE_ENV = dev /prod

password

adduser lb
id lb
usermod -aG sudo lb
su lb

copy .ssh/authorized_keys to lb users-->~/.ssh/autho

chmod 600 authorize_keys
sudo nano /etc/ssh/sshd_config

sudo systemctl reload sshd

sudo ufw allow OpenSSH
sudo ufw allow https
sudo ufw allow http
sudo ufw status


pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u lb --hp /home/lb



$ openssl genrsa -out privatekey.pem 1024
$ openssl req -new -key privatekey.pem -out certrequest.csr
$ openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem

replace privatekey + certifate with 
letsEncrypt


sudo letsencrypt certonly
sudo tail -f /var/log/nginx/access.log


root@ip-172-31-6-102:/home/lb/apps/certbot# dig @8.8.8.8 www.asksage.com

; <<>> DiG 9.11.3-1ubuntu1.2-Ubuntu <<>> @8.8.8.8 www.asksage.com
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 50624
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;www.asksage.com.               IN      A

;; ANSWER SECTION:
www.asksage.com.        10799   IN      CNAME   HDRedirect-LB3-890977680.us-east-1.elb.amazonaws.com.
HDRedirect-LB3-890977680.us-east-1.elb.amazonaws.com. 14 IN A 52.22.89.169
HDRedirect-LB3-890977680.us-east-1.elb.amazonaws.com. 14 IN A 54.144.21.246

;; Query time: 42 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Fri Oct 19 01:02:33 UTC 2018
;; MSG SIZE  rcvd: 139

