
const express = require("express")
const noteRouter = require("./routes/note.route")
const cors = require("cors")
const path = require("path")

const app = express();
app.use(express.json());
app.use(cors())

app.use(express.static("./public/dist"))

app.use("/api/notes", noteRouter);
app.get(/.*/, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public", "dist", "index.html")
  );
});

module.exports = app;