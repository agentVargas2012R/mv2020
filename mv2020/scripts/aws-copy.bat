@echo off
set WORKSPACE=C:\workspace\portfolio-2020\mv2020
cd %WORKSPACE%\dist\browser

echo "Deploying To Production Environment"
aws s3 cp . s3://mv-2020 --region us-east-1 --recursive

cd %WORKSPACE%
