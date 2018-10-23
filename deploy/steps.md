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


