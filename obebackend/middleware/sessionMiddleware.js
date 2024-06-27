// packages/server/middleware/sessionMiddleware.js
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { SESSIONS_SECRET, MONGODB_URI } = require("../config");

const store = MongoStore.create({
  mongoUrl: MONGODB_URI,
  collectionName: "sessions",
});

const sessionMiddleware = session({
  secret: SESSIONS_SECRET,
  rolling: true, // https://stackoverflow.com/questions/20387554/how-to-keep-alive-an-nodejs-passport-session
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 14,
    httpOnly: true,
    sameSite: false && "none",
  },
});

module.exports = { sessionMiddleware };
