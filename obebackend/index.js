const express = require("express");
const app = express();
const path = require("path");
const { PORT } = require("./config");
const api = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectToDatabase } = require("./database/connect");
const { CORS_CONFIG } = require("./config");
const { appLoggerMiddleware } = require("./middleware/sessionMiddleware");

const { sessionMiddleware } = require("./middleware/sessionMiddleware");

app.use(cors({ ...CORS_CONFIG }));
app.use(express.json());
app.use(cookieParser());

app.use(sessionMiddleware);

app.use("/", api);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} `);
});
