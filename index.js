var express = require ('express');
var app = express();
var AuthController = require('./Controllers/AuthController');
var BodyParser = require('body-parser');
var UserController = require('./Controllers/UserController');
var ItemController=require('./Controllers/ItemController');
var uploadRouter=require('./Controllers/upload');
var fs=require('fs');
app.use(BodyParser.urlencoded({extended: true}));

  
app.get('/recent',ItemController.GetAllRecent);
app.get('/trend',ItemController.GetAllTrending);
app.get('/users',UserController.GetAll);
app.post('/signup',  UserController.Hashing,UserController.CheckIfExist,UserController.Registration);
app.post('/login',UserController.Hashing,UserController.Login,AuthController.jwtTokenGen);
app.use('/upload', uploadRouter);
app.get('/profile/:email',UserController.GetAll);
//app.use(express.static('./public/uploads'));
app.get('/image/:image', (req, res) => {
    pic=req.params.image
    res.sendFile('./public/uploads/'+pic, { root: __dirname });
});


/*app.get('/image/:image',function(req,res){
    pic=req.params.image
    //res.send(pic);
    fs.readFile('./public/uploads/' + pic, function (err, content) {
        if (err) {
            res.writeHead(400);
            console.log(err);
            res.end("No such image");    
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200,{'Content-type':'image/jpg'});
            res.end(content);
        }
});

})*/

app.listen(3003);




