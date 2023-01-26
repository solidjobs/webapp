#!/bin/bash

# This script is only for project administrators, you won't be able to execute it without the permissions.

rm dist.tar

# git pull
docker compose run -it solidjobs-web sh -c "ng build --prod"
sudo chmod 777 dist -R # ñapa enorme terrible
cp htaccess/_pro dist/.htaccess

# You will need to launch a ssh-keygen and add it to your github. Probably you won't have permissions to it.
git clone git@github.com:solidjobs/ote-dialogflow-client.git dist/dialogflow

# install dependencies solidjobs
docker compose run -it solidjobs-php sh -c "cd dist/dialogflow && php composer.phar install"

# proxy profile pictures
mkdir dist/api

cp profile_image.php dist/api/index.php

mv dist dist_new

tar -cvf dist.tar dist_new/

# in server tar -xvf dist.tar
