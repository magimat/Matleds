var express = require('express');
var app = express();
app.listen(80);

const Yeelight = require('yeelight2');
const leds =  new Yeelight('192.168.11.100', 55443)


app.get('/leds/on', function(req, res){
  leds.set_power('on')
  res.sendStatus(200)
});


app.get('/leds/off', function(req, res){
  leds.set_power('off')
  res.sendStatus(200)
});


app.get('/leds/color/:color', function(req, res){
  leds.set_rgb('0x' + req.params.color)
  res.sendStatus(200)
});


app.get('/leds/dim/:brightness', function(req, res){
  leds.set_bright(req.params.brightness)
  res.sendStatus(200)
});

