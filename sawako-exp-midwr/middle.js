'use strict';
var express = require('express');
var app = express();

module.exports = function middlePerson (req, res, next) {
  req.on('data', (data)=>{
    try{
      var obj = data.toString();
      req.body = JSON.parse(obj);
    } catch (err){
      console.log('Data is not a valid JSON object : ' + err);
    }
    next();
  });
};
