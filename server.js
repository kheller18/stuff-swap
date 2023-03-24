const express = require('express');
const path = require('path');
// const routes = require('./routes/api.js');
// const passport = require('passport');
// const User = require('./models/user');
// const LocalStrategy = require('passport-local').Strategy;
// const cron = require('node-cron');
// const moment = require('moment');

// defining the port for heroku or local
const PORT = process.env.PORT || 3001;

// initializing app
const app = express();

// settting up express details
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // require('./seeders/herokuSeed')(db);
  // require('./seeders/sportSeed');
  console.log('product');
} else {
  require('dotenv').config();
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressSession);
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// setting up routes
// app.use(routes);

// define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// initializing server
const server = require('http').createServer(app);

// setting up socket
const io = require('socket.io')(server, {
  cors: {
    methods: ['GET', 'POST'],
    allowedHeaders: ['x-access-token', 'Origin', 'Content-Type', 'application/json'],
    credentials: true
  }
})

let loggedOnUsers = [];

// when a user connects, this should give them the data they need for the betting component
io.on('connection', async (socket) => {
  if (socket.handshake.headers['x-current-user']) {
    loggedOnUsers[socket.handshake.headers['x-current-user']] = socket.id;
    // logsocket.handshake.headers['x-current-user']] = socket.id;
    // sendData = await fetchData(socket);
  }

  console.log('connection granted' , {
    socket: socket.id,
    userId: socket.handshake.headers['x-current-user']
  });

  socket.on('disconnect', () => {
    // console.log('user disconnected', socket.id)
    loggedOnUsers[socket.handshake.headers['x-current-user']] = null;
    // socket.removeAllListeners()
  });
});

server.listen(PORT, () => {
  console.log(`🌎 ==> API Socket server now on port ${PORT}!`);
});
