
var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , path = require('path')
  , fs = require('fs')
  , events = require('./fk-match-events.js').events;

io.configure(function() {
    io.set('transports', [ 'websocket' ]);
    if (process.env.IISNODE_VERSION) {
        // If this node.js application is hosted in IIS, assume it is hosted 
        // in IIS virtual directory named 'dante' and set up the socket.io's resource
        // value for socket.io to recognize requests that target it. 
        // Note a corresponding change in the client index-socketio.html, as well
        // as necessary URL rewrite rule in web.config. 

        io.set('resource', '/fksocketio/socket.io');
    }
});

function handler (req, res) {
    fs.readFile(path.resolve(__dirname, 'index-socketio.html'),
        function (err, data) {
            if (err) {
              res.writeHead(500);
              return res.end('Error loading index-socketio.html');
            }

            res.writeHead(200);
            res.end(data);
        }
    );
}

io.sockets.on('connection', function (socket) {
    function schedule(line) {
        if (line < events.length) 
            setTimeout(function() {
                if (socket) {
                    socket.emit('onmatchevent', events[line]);
                    schedule(line + 1);
                }
            }, 2400);
        else if (socket) {
            socket.disconnect();
            socket = null;
        }
    }

    socket.emit('onmatchevent', events[0]);
    schedule(1);
});

app.listen(process.env.PORT || 8888);
