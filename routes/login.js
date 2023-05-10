
// const storage = require('node-localstorage');
// var localStorage = storage('./scratch'); 

const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post

// /admin/add-product => GET
router.get('/login', (req, res, next) => {
    res.send(`<form action="/chat" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
    <input id="username" type="text" name="title"></input><br>
    <button type="submit">Login</button></form>`);
});

// for only incoming get/post request
// /admin/add-product => POST
router.use('/chat',(req, res, next) => {

    const fileData = fs.readFileSync('./message.txt', 'utf8');
    // console.log('Reading data from file ', fileData);
    // localStorage.setItem('username',req.body.name);

    res.send(`<form action="/mess" method="POST" onsubmit="document.getElementById('username1').value = localStorage.getItem('username')">
    <input type="hidden" name="username" id="username1">${fileData}</input><br>
    <input type="text" name="message"></input><br>
    <button type="submit">Send</button></form>`);
    
    // console.log("Message written by user ",req.body.message);

    
    // res.redirect('/chat');
});

router.post('/mess',(req, res, next) => {
    // console.log('Message written by user ',req.body.name);
    const data = req.body.username + ':'+ req.body.message + " "
    console.log(req.body);
    
    // console.log("message is ",req.body);
    fs.appendFile("message.txt", data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        
        }
      });
    res.redirect('/chat');
})

module.exports = router;
