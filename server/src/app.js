const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const temp = require('../src/tempRead');

var app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(cors());



app.get('/todo',(req,res)=>{
    res.send([
        'thing 1',
        'thing 2'
    ])
});

app.get('/tempreal/:city',(req,res)=>{
    console.log(req.params.city);
    temp(req.params.city).then(function(data,err){
        if(err)
            console.log(err);
        console.log('tempdata:'+data);
        res.json(data);
    });
})

app.listen(process.env.PORT || 8081);