var amqp = require('amqplib/callback_api');
amqp.connect('amqp://tvpjzwzv:abQDPNgr7SGwcEoMj1JjtklkUkreW56_@llama.rmq.cloudamqp.com/tvpjzwzv', function(err, conn) {
  if(err) throw err;
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q, new Buffer('Hello World!'));
    console.log(" [x] Sent 'Hello World!'");
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});