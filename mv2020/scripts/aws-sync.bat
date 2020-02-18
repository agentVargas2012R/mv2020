cd WORKSPACE=C:\workspace\portfolio-2020\mv2020
IF "%1" == "PROD" GOTO PROD
:TEST
    echo "Deploying to Test Environment"
	aws s3 sync . s3://qa-mvargas --region us-east-1
    GOTO END
:PROD
    echo "Deploying to Prod Environment"
    aws s3 cp . s3://prod-mvargas --region us-east-1 --recursive
    GOTO END
:END

cd %WORKSPACE%
