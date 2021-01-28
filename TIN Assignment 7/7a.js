const http = require('http');

var val1,val2,result;

const server = http.createServer((req,res)=>{
    var subst = req.url;
        var all = subst.split("%20");
        var check = all[0];
         val1 = parseInt(all[1]);
         val2 = parseInt(all[2]);
         result;
    if (check === '/add'){
          result = val1+val2;
          res.writeHead(200,{'Content-Type': 'text/html'});
          res.write('First parameter is = ' + val1 +'\n');
          res.write('Second parameter is = ' + val2 + '\n');
          res.end('The result for addition is = ' + result);
    }if (check === '/sub'){
         result = val1-val2;
         res.writeHead(200,{'Content-Type': 'text/html'});
          res.write('First parameter is = ' + val1 +'\n');
          res.write('Second parameter is = ' + val2 + '\n');
          res.end('The result for subtraction is = ' + result);
    }if (check === '/mul'){
         result = val1*val2;
         res.writeHead(200,{'Content-Type': 'text/html'});
          res.write('First parameter is = ' + val1 +'\n');
          res.write('Second parameter is = ' + val2 + '\n');
          res.end('The result for multiplication is = ' + result);
    }if (check === '/div'){
         result = val1/val2;
         res.writeHead(200,{'Content-Type': 'text/html'});
          res.write('First parameter is = ' + val1 +'\n');
          res.write('Second parameter is = ' + val2 + '\n');
          res.end('The result for division is = ' + result);
    }
});

server.listen(5000);

console.log('listen on port 5000...');