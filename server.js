// importing dependencies
const express = require('express');
const path = require('path');

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
} else {
  require('dotenv').config();
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressSession);

// define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// initializing server
const server = require('http').createServer(app);

server.listen(PORT, () => {
  console.log(`🌎 ==> API Socket server now on port ${PORT}!`);
});
