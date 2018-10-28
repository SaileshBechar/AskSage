ssh-keygen -t rsa -b 4096 -C "your_email"

ssh-add .\deploy\InnoLabKey.pem
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


sudo npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json

ng update @angular/cli @angular/core
//migrate to ng 7.0

Step 1: From your project repository, bring in the changes and test.
git fetch origin
git checkout -b origin/IL-66-FeedbackForm origin/origin/IL-66-FeedbackForm
git merge master

Step 2: Merge the changes and update on GitHub.

git checkout master
git merge --no-ff origin/IL-66-FeedbackForm
git push origin master


https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github

//test server
 ssh -i .\deploy\InnoLabKey.pem ubuntu@ec2-35-183-103-5.ca-central-1.compute.amazonaws.com
nano node_modules/loopback-component-explorer/public/index.html


docker build-t asksage/nginx .
docker run -d -p 80:80 --name asksage asksage/nginx
docker ps
docker stop <name>
docker rm   <name>

docker login
docker push


//nginx box
sudo apt-get update
sudo apt-get install nginx
cd /etc/nginx
nano nginx.conf
>>worker_process:<cpu>

cd sites-available
sudo nano default


upstream project{
 server <ip1:3000>;
 server <ip2:3000>;
}

proxy_cache_path  /var/cache/nginx/api levels=1 keys_zone=api:10m;

server {
  listen 80;
  server_name ask-sage.ca ask-sage.com www.ask-sage.ca www.ask-sage.com;

  location / {
    proxy_pass http://project;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_redirect off;
  }
}


sudo service nginx reload

sudo apt install apache2-utils
ab -c 40 -n 1000 www.ask-sage.com


//To completely uninstall Docker:

Step 1

dpkg -l | grep -i docker
To identify what installed package you have:

Step 2

sudo apt-get purge -y docker-engine docker docker.io docker-ce  
sudo apt-get autoremove -y --purge docker-engine docker docker.io docker-ce  


sudo rm -rf /var/lib/docker
sudo rm /etc/apparmor.d/docker
sudo groupdel docker
sudo rm -rf /var/run/docker.sock


//Add ssl
https://www.nginx.com/blog/free-certificates-lets-encrypt-and-nginx/

//Add nodes
sudo apt-get update
wget -qO- https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install pm2 -g
mkdir apps && cd apps && git clone 


//lb
cd ~/apps
mkdir repo
git init --bare asksage.git
git clone /home/lb/apps/repo/asksage.git /home/lb/apps/asksage

 chmod ug+x ./post-receive
 
live    ssh://lb@ec2-35-182-204-3.ca-central-1.compute.amazonaws.com/home/lb/apps/repo/asksage.git (fetch)
live    ssh://lb@ec2-35-182-204-3.ca-central-1.compute.amazonaws.com/home/lb/apps/repo/asksage.git (pu

http://webdesignforidiots.net/2016/02/digital-ocean-public-key-access-denied-on-existing-droplet/


git push live master
Test push

//postReceive hook
&& cd /home/lb/apps/asksage/client/v2/askSage  && npm i && ng build --prod --build-optimizer && cd /home/lb/apps/asksage \