# Matleds


## build docker image

```		
cd ~
git clone git@github.com:magimat/Matleds.git
cd Matleds
docker build -t magimat/matleds .
docker push magimat/matleds
```

## run docker 

```
docker run -p 5000:80 --name matleds -d --restart unless-stopped magimat/matleds
```





<br/>
<br/>
<br/>


***
***


<br/>
<br/>
<br/>
<br/>




## (DEPRECATED, use docker instead)

### Installation en service pour démarrage automatique au reboot . 


#### Install forever

```sudo -i npm install forever -g```


#### Créer fichier service

sudo nano /etc/init.d/matleds 

```
#!/bin/sh
#/etc/init.d/matleds
export PATH=$PATH:/usr/local/bin
export NODE_PATH=$NODE_PATH:/usr/lib/node_modules

case "$1" in
start)
exec forever start --id "matleds" --sourceDir=/home/pi/Matleds -p /home/pi/Matleds/ -a -l /home/pi/Matleds/matleds.log -e /home/pi/Matleds/matleds.log -o /home/pi/Matleds/matleds.log matleds.js
;;
stop)
exec forever stop --sourceDir=/home/pi/Matleds matleds
;;
*)
echo "Usage: /etc/init.d/matleds {start|stop}"
exit 1
;;
esac
exit 0
```


#### Rendre exécutable

```sudo chmod 755 /etc/init.d/matleds```


#### Ajouter boot services

```sudo update-rc.d matleds defaults```


#### Supprimer du boot services

```update-rc.d matleds remove```

### start / stop

```sudo service matleds start```

```sudo service matleds stop```

