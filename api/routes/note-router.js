const express = require('express');

const NoteCtrl = require('../controllers/note-controller');

const router = express.Router();

router.post('/note', NoteCtrl.createMovie);
router.put('/note/:id', NoteCtrl.updateMovie);
router.delete('/note/:id', NoteCtrl.deleteMovie);
router.get('/note/:id', NoteCtrl.getMovieById);
router.get('/note', NoteCtrl.getMovies);

module.exports = router;
