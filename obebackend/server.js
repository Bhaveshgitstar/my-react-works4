const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "")));

app.use("/", require("./routes/root"));
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/logout", require("./routes/logout"));

app.use("*");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Bhai server tera ${PORT} pe chal rha `);
});
