var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
client.on('connect', function () {
  setInterval(function () {
    client.publish('enin.ia', JSON.stringify({
      pid: process.pid,
      msg: (Math.random() * 1000).toFixed()
    }));
  }, 2000);
})