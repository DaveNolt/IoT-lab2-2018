var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
client.on('connect', function () {
  client.subscribe('enin.ia');
})
client.on('message', function (topic, message) {
  console.dir(JSON.parse(message.toString()), {colors: true});
})