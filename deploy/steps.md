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

pm2 start deploy.json


