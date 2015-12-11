var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /topics

// GET /topics
router.get('/', function(req, res, next) {
    // Hae kaikki aihealueet tässä (Vinkki: findAll)
    
    Models.Topic.findAll().then(function(topics){
    console.log("oispa logi");
        res.json(topics);
//        res.sendStatus(200);

    });

});

// GET /topics/:id
router.get('/:id', function(req, res, next) {

    var topicId = req.params.id;
    Models.Topic.findOne({where: {id: topicId}}).then(function(topic){
        res.json(topic);
//        res.sendStatus(200);

    });
});

// POST /topics
router.post('/', function(req, res, next) {
  // Lisää tämä aihealue
  var topicToAdd = req.body;
  
  Models.Topic.create(topicToAdd).then(function(topic){
      res.json(topic);
  
  });
  // Palauta vastauksena lisätty aihealue
});

// POST /topics/:id/message
router.post('/:id/message', function(req, res, next) {
  // Lisää tällä id:llä varustettuun aihealueeseen...
  var topicId = req.params.id;
  // ...tämä viesti (Vinkki: lisää ensin messageToAdd-objektiin kenttä TopicId, jonka arvo on topicId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
  var messageToAdd = req.body;
  // Palauta vastauksena lisätty viesti
  res.sendStatus(200);
});

module.exports = router;
