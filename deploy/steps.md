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
ab -c 40 -n 1000 www.ask-sage.com/login


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
crontab -e
sudo /usr/bin/certbot renew 


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

<!--  -->

ng add @angular/pwa --project askSage

git tag -a v0.1 -m "Version 0.1 - 10/31/2018"
git push origin --tags
git checkout v0.1



///Clean user

{
  "ids": {
    "User": 1,
    "AccessToken": 1,
    "ACL": 1,
    "Broker": 2,
    "RoleMapping": 1,
    "Role": 1,
    "BDR": 1,
    "feedback": 1
  },
  "models": {
    "User": {},
    "AccessToken": {},
    "ACL": {},
    "Broker": {
      "1": "{\"bdr\":{\"name\":\"Mike Ross\",\"phone\":\"123456\",\"role\":\"Business Executive\",\"company\":\"Harvey LLC\",\"email\":\"m.r@harvey.com\"},\"fname\":\"Jhon\",\"lname\":\"Doe\",\"password\":\"$2a$10$t7lfIGuphtNQOh8JoSq4UOnFXQ419MXQPsr59u0I67cU/lKvd60Ee\",\"email\":\"user1@asksage.com\",\"id\":1}"
    },
    "RoleMapping": {},
    "Role": {},
    "BDR": {},
    "feedback": {}
  }
}



   $ cd C:\Dinesh\playground\api_connect\inventory

  Create a model in your app
    $ apic create --type model

  Compose your API, run, manage, enforce and deploy it with API Connect
    $ apic edit

  Run the app
    $ apic start


    
{
  "uuid": "186d1967b557ca7e2ef71b5ec25c51cd3a7c28672c7ea5dafb8bd76e0a5c2e2a",
  "type": "Auto",
  "Customer": {
"Name":"Ethan Hunt",
"Address": "007 That Street, Thisville, ON"},
  "brokerId": "186d1967b557ca7e2ef71b5ec25c51cd3a7c28672c7ea5dafb8bd76e0a5c2e2a",
  "Adjuster": "Will Smith"
}


//Debug mongo db remote
  //LB nginx
  ssh -i .\deploy\InnoLabKey.pem lb@ec2-35-182-204-3.ca-central-1.compute.amazonaws.com -- LB

//DB
  ssh -i .\deploy\InnoLabKey.pem ubuntu@ec2-35-182-61-225.ca-central-1.compute.amazonaws.com --DB

/var/lib/mongodb
/var/log/





  sudo apt-get update



  echo "  
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
  echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
  sudo apt-get update
  sudo apt-get install -y mongodb-org
  echo "mongodb-org hold" | sudo dpkg --set-selections
  echo "mongodb-org-server hold" | sudo dpkg --set-selections
  echo "mongodb-org-shell hold" | sudo dpkg --set-selections
  echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
  echo "mongodb-org-tools hold" | sudo dpkg --set-selections
" >> mongoInstall.bash

echo "
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
systemctl mongod status


show dbs
show collections
db
use AskSage <db>
db.Broker.find()





sudo bash ./mongoInstall.bash


//Create app Server
 ssh -i .\deploy\InnoLabKey.pem ubuntu@ec2-35-183-208-5.ca-central-1.compute.amazonaws.com


// git --git-dir=/apps/repo/asksage.git --work-tree=/apps/asksage checkout master -f
//Install Node + npm
 8.12 /6.4


//To add to git post_receive hook later in git server

cd apps && git clone ssh://lb@ec2-35-182-204-3.ca-central-1.compute.amazonaws.com/home/lb/apps/repo/asksage.git . && apt install curl -y && curl -sL https://deb.nodesource.com/setup_8.x | sudo bash - && apt install nodejs -y && node -v && npm -v && npm i && npm install pm2 -g && (pm2 delete ‘AskSage’ || true) && pm2 -n AskSage start -i max server/server.js -prod 


 

mkdir apps


MongoDB shell version v4.0.3

,

  // "mongod": {
  //   "host": "35.182.61.225",
  //   "port": 27017,
  //   "url": "mongodb://35.182.61.225:27017/askSage",
  //   "database": "askSage",
  //   "password": "",
  //   "name": "mongod",
  //   "user": "",
  //   "connector": "mongodb"
  // }





{
  "bdr": {
"name" :"Mike Ross",
"Role" : "Business Execute",
"email": "mross@harvey.com",
"phone": "123456789",
"company": "Harvey LLC",
"address": "100 King St",
"city": "Waterloo",
"province": "ON",
"postcode": "n2h 6t7"
},
  "fname": "Jhon",
  "lname": "Doe",
  "realm": "string",
  "username": "jdoe",
  "email": "user1@asksage.com",
  "password": "password"
}



db.dropDatabase()

ng g s /Services/Email
wawanesainnolab@gmail.com


