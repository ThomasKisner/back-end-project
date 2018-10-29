const express = require("express");

const db = require("./notesModel");

const router = express.Router();

//GETS ALL NOTES
router.get("/notes", (req, res) => {
  db.find()
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

//GET NOTE MATCHING ID
router.get("/notes/:id", (req, res) => {
  const {id} = req.params;

  db.findByID(id)
    .then(note => {
      if (note.length >= 1) {
          console.log(note)
        res.status(200).json(note);
      } else {
        res.status(404).json({ error: "No note exists with that id" });
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

//ADD NOTE TO NOTES
router.post('/notes', (req, res)=> {
const note = req.body;

db.add(note)
.then(response => {
    if(response){
    res.status(200).json(note)}
})
.catch(err => res.status(500).send(err.message))
})

//DELETE NOTE MATCHING ID

router.delete('/notes/:id', (req,res)=> {
    const {id} = req.params;

    db.remove(id)
    .then(response => { 
        if(response === 1){
        res.status(200).send('Note deleted')
        } else {
            res.status(404).send('There is no note at that id')
        }
    })
    .catch(err => {res.send(500).send(err)})
})

//UPDATE NOTE
router.put('/notes/:id', (req, res) =>{
    const {id} = req.params;
    const changes = req.body;

    db.update(id, changes)
    .then(response => {
        if(response === 1){
        res.status(200).json(changes)
        } else {res.status(404).send('There is no note to update at that id')}
    })
    .catch(err => {res.status(500).json(err)})
})

module.exports = router;
