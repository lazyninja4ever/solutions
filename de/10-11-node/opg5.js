//køres i terminal med node
//$node opg5

const http = require("http");
const lib = require('fs');
const hostname = "127.0.0.1";
const port = 8080;
const app = http.createServer();


//her opdateres så der henvises til til
const routeMap = {
    "/info": [getView('index.html'), 'text/html; charset=utf-8'],
    "/js.js": [getView('js.js'), 'text/javascritp; charset=utf-8'],
    "/contact":[getView('contact.html'), 'text/html; charset=utf-8'],
    "/vacationClosed.js": [getView('vacationClosed.js'), 'text/javascritp; charset=utf-8'],
    "/about": [getView('about.html'), 'text/html; charset=utf-8'],
    "/hello": [getView('greet.html'), 'text/html; charset=utf-8'],
    "/error": [getView('error.html'), 'text/html; charset=utf-8']
};

app.on('request', async function(req, res){
    let responseMsg;
    let contType = 'text/html; charset=utf-8';
    console.log(req.url);
    
    if(req.method === 'GET'){
        if (routeMap[req.url]) {      
            responseMsg = routeMap[req.url][0];
            contType = routeMap[req.url][1];

        } else {
            responseMsg = "<h1>Page could not be found!</h1>";
        }
        
    }
    else if (req.method === 'POST'){
        let body = [];
        req.on('data', function(bodyData){
            body.push(bodyData);
        });
        req.on('end', function(){
            body = Buffer.concat(body).toString();
            console.log('log: request body contents: ' + body);
    		checkLogin(res, body);
        });

    	return;



    } else{
        responseMsg = '<h1>Something went wrong</h1>';
    }
    res.writeHead(200, {"content-type": contType});
    
    res.write(responseMsg);
    res.end();
});

async function checkLogin(res,  data){
	console.log(data);
	res.writeHead(200, {"content-type": "text/html; charset: utf-8"});
    
    res.write('<h1>Data received at function</h1>');
    res.end();
}

function getView (path){
    let html = lib.readFileSync(path, 'utf-8', function (err, html) {
        if (err) {
            throw err; 
        }  

        return html;    
    });

    return html;
}

app.listen(port, hostname, function (){
    console.log(`Server running, and listening at http://${hostname}:${port}/`)
});
