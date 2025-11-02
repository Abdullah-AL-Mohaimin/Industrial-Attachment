const http = require('http');
const fs = require('fs');
// const path = require('path');

const server =http.createServer((req,res) => {
//   const filePath = path.join(__dirname, 'index.html');

    fs.readFile("index.html", "utf-8", (err,data) => {
        if(err){
            console.log(err);
        }
        else{
            res.writeHead(200, {'content-type' : 'text/html' });
            res.write(data);
             res.end();      
        }
    })  
});
server.listen(3000 ,() => {
    console.log("server is running ....");  
});
