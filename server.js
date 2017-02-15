var express = require('express'); //1,2,3, are libraries 
// express is the library which is use to create a web server 
var morgan = require('morgan');//to help us output log of our web serber
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
    title: 'Article-one |Rohal Kurup',
    heading: 'Article-one',
    date: '3 Nov 1997 ',
    content: ` <p>
                HI THIS IS MY FIRST WEB COURse
                 HI THIS IS MY FIRST WEB COURSE
                  HI THIS IS MY FIRST WEB COURSE
            </p>
            <p>
                 HI THIS IS MY FIRST WEB COURSE
                  HI THIS IS MY FIRST WEB COURSE
                   HI THIS IS MY FIRST WEB COURSE
            </p>`
    
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmltemplate=`
   <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width device-width, initial scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
      
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h4>
           ${heading}
        </h4>
        <div>
            ${date}
        </div>
        <div>
           ${content}
           </div>
    </div>
    </body>
</html>
 `;
 return htmlTemplate;
}
// 9,13,16 are lines which handles specific urls
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article_one',function(req,res){
res.send(createTemplate(articleone));
});

app.get('/article-two',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    });

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


//server.js file is the source code of the web server that is executed