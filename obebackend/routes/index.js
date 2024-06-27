const express = require("express");
const router = express.Router();

router.get("^/$|/index(.html)?", (req, res) => {
  // res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  res.json("Server is running");
});

router.get("/set-session", (req, res) => {
  req.session.user = {
    uuid: "12234-2345-2323423",
  };
  req.session.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ message: "server running" });
    }
  });
});

router.get("/get-session", (req, res) => {
  if (req.session.user) {
    res.send("Session data: " + JSON.stringify(req.session));
  } else {
    res.send("No session data found");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.send("Error destroying session");
    } else {
      res.send("Session destroyed");
    }
  });
});
module.exports = router;
