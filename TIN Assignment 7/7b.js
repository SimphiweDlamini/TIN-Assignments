
const fs = require('fs');

var myDirectory = 'C:\\Users\\SPIDERMAN\\Desktop';//where directory is passed as a parameter

    fs.watch(myDirectory,(eventtype,filename)=>{
        console.log(eventtype);
        console.log(filename);
    })


