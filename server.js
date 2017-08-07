var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:'Article One | Parvinder',
        heading:'Article One',
        date:'6 Aug 2017',
        content:`<p>This is article one. This is article one. This is article one.
                This is article one. This is article one. This is article one.
                This is article one. This is article one. This is article one.
                This is article one. This is article one. This is article one.
                This is article one. This is article one. This is article one.
                This is article one. This is article one. This is article one.</p>`
    },
    'article-two':{
        title:'Article Two | Parvinder',
        heading:'Article Two',
        date:'7 Aug 2017',
        content:`<p>This is article Two. This is article two. This is article Two.
                This is article Two. This is article Two. This is article Two.
                This is article two. This is article two. This is article two.
                This is article two. This is article two. This is article two.
                This is article two. This is article two. This is article two.
                This is article two. This is article two. This is article two.</p>`
    },
    'article-three':{
        
        title:'Article Three | Parvinder',
        heading:'Article Three',
        date:'8 Aug 2017',
        content:`<p>This is article three. This is article three. This is article three.
                This is article three. This is article three. This is article three.
                This is article three. This is article three. This is article three.
                This is article three. This is article three. This is article three.
                This is article three. This is article three. This is article three.
                This is article three. This is article three. This is article three.</p>`
    }
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
            <html>
        <head>
            <title>
                ${title}
            </title>
           <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr>
                <h1>${heading}</h1>
                <p>${date}</p>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter);
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
