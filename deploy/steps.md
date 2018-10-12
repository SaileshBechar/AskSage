ssh -i .\deploy\InnoLabKey.pem ubuntu@ec2-35-182-204-3.ca-central-1.compute.amazonaws.com

mkdir remoteRepo
cd remoteRepo
sudo git init --bare


git remote add deploy ssh://ubuntu@ec2-35-182-204-3.ca-central-1.compute.amazonaws.com

