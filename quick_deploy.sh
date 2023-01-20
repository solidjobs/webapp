#!/bin/bash

# git pull
ng build --prod
cp htaccess/_pro dist/.htaccess

# You will need to launch a ssh-keygen and add it to your github. Probably you won't have permissions to it.
# git clone git@github.com:solidjobs/ote-dialogflow-client.git dist/dialogflow

# cd dist/dialogflow

# php composer.phar install
