
// app.js

const express = require("express")
const noteRouter = require("./routes/note.route")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/notes", noteRouter);

module.exports = app;