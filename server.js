var express=require('express');
var app=express();

app.use('/', express.static(__dirname+'/public'));

app.get('/contactlist', function(req, res){
  console.log('i received a get request');
  
  person1={
    name:'jo',
    email: 'jo@test.com',
    phone: '333-333-3333'
  };

  person2={
    name:'hank',
    email: 'hank@test2.com',
    phone: '555-555-5555'
  };

  person3={
    name:'bobby',
    email: 'bobby@test3.com',
    phone: '777-777-7777'
  };

  var contactlist=[person1, person2, person3];
  res.json(contactlist);
});

app.listen(3000);
console.log('listening on 3000');
