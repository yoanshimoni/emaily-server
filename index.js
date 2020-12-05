const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(authRoutes);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
