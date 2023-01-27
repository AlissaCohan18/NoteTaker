const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const {dbNotes} = require("../../db/db.json");

router.get("/api/notes", (req, res) => {
  res.json(dbNotes);
});

router.post("/api/notes", (req, res) => {
  const notes = createNote(req.body);
  res.json(notes);
});

function createNote(body) {
  dbNotes.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ dbNotes }, null, 2)
  );
  return body;
}

module.exports = router;
