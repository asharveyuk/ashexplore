var http = require('http');

var userCount = 0;
var version = "v01.01.14";

http.createServer(function (request, response) {
    console.log('ASH Explore '+version);
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('ASH Explore '+version+'\n');
    response.write('Current Users: '+userCount+'\n');
    
    /* main */
    
    response.write('Processing Started\n');
    
    if (true)
    {   
      console.log("Running Algoritm..."); 
    }
    
    response.write('Processing Finished.\n');
    
    response.end();
    
}).listen(process.env.PORT);

console.log('Server started');
