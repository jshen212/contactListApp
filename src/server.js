var express = require('express');
var mongojs = require('mongojs');
var db = mongojs("mongodb://jeffshen86@gmail.com:J3ffr3y86@ds011228.mongolab.com:11228/heroku_ng59m694", ["contactlist"]);
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());

app.get('/contactlist', function(req,res){
  // console.log('i received a GET request');
  db.contactlist.find(function(err,docs){
    res.json(docs);
    console.log(docs);
  });
});

app.post('/contactlist', function(req, res){
  console.log(req.body);
  db.contactlist.insert(req.body, function(err,doc){
    console.log(doc);
    res.json(doc);
  });
});

app.delete('/contactlist/:id', function(req,res){
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.get('/contactlist/:id', function(req,res){
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err,doc){
    res.json(doc);
  });
});

app.put('/contactlist/:id', function(req,res){
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function(err,doc){
      res.json(doc);
    });
  });

  app.listen(process.env.PORT || 8000);
  console.log('server running on 8000');
