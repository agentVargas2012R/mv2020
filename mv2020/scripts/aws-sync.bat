cd WORKSPACE=C:\workspace\portfolio-2020\mv2020\dist\browser
cd %WORKSPACE%

echo "Deploying to Prod Environment"
aws s3 cp . s3://mv-2020 --region us-east-1 --recursive

cd %WORKSPACE%
