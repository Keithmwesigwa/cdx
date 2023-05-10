var express = require('express');
var http = require('http');
var path = require("path")
var app = express();
var server = http.createServer(app)
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
service: "gmail", 
host: "smtp.gmail.com",
 port: 587,
 auth: {
    user: 'keithmwesigwa20@gmail.com',
    pass: 'ayojbnidluaymrlj'
  },
tls: { rejectUnauthorized:false } 
});
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, 'static')));
app.get('/bgx.png', function(req,res){
	 res.sendFile(path.join(__dirname,'bgx.png'));
	})
	app.get('/iot.jpg', function(req,res){
	 res.sendFile(path.join(__dirname,'iot.jpg'));
	})
	app.get('/c.jpeg', function(req,res){
	 res.sendFile(path.join(__dirname,'c.jpeg'));
	})
	app.get('/cc.jpg', function(req,res){
	 res.sendFile(path.join(__dirname,'cc.jpg'));
	})
	app.get('/qa.png', function(req,res){
	 res.sendFile(path.join(__dirname,'qa.png'));
	})
	app.get('/v.png', function(req,res){
	 res.sendFile(path.join(__dirname,'v.png'));
	})
	app.get('/', function(req,res){
	 res.sendFile(path.join(__dirname,'Cd.html'));
	})
	app.post('/send', function(req,res){
		 var name=req.body.Name
	 var email=req.body.Email
	 	 var subj=req.body.Subject
	 var message=req.body.Message
	 
	 var msg="<p>"+name+"</br>"+message+"</p>"
	 console.log(msg)
	 
	 var mailOptions = {
  from: 'keithmwesigwa20@gmail.com',
  to: 'cdxstudios31@gmail.com',
subject: subj,
  html:msg
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
res.send(error)
  } else {
	 var html="<html lang='en' >"+
	 "<head><meta name='viewport' content='width=device-width, initial-scale=1'><style>.box"+
"{top:100px;left:30px;right:30px;"+
 "position:absolute;"+
  "min-height:100px;"+
  "background-color: white;"+
 "border-radius: 5px;"+
"box-shadow: 0px 0px 8px #e0e0e0;}"+
	"p{padding:30px;font-family:Arial;font-size:15px;color:#424242;}h3{padding:30px;color:#212121;font-family:Arial;}</style></head>"+
	"<body><div class='box'><h3>Congratulations "+name+"</h3><p>Your message was successfully sent to our team.You will soon get a reply via email from our team after we evaluate you request.</p></div>"+
		"</body></html>"
	
	res.send(html)
	
	
	
	
	console.log("message sent")
	 }
	 
	 })
	 
	 
	})
server.listen(3000)
