@echo off
set WORKSPACE=C:\workspace\portfolio-2020\mv2020
cd

REM TODO: WRITE AN IF STATEMENT, MIGRATE TO SYNC SCRIPT, WRITE DEPLOY SCRIPT

IF "%1" == "PROD" GOTO PROD
:TEST
    echo "Deploying To Test Environment"
    aws s3 cp . s3://qa-mvargas --region us-east-1 --recursive
    GOTO END
:PROD
    echo "Deploying To Production Environment"
    aws s3 cp . s3://prod-mvargas --region us-east-1 --recursive
    GOTO END
:END

cd %WORKSPACE%
