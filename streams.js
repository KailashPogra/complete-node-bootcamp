// by using stream we can send a large amount of data in chunks 

const { error } = require('console');
const fs = require('fs');
const server= require('http').createServer();

server.on('request', (req, res) => {
    //solution 1
 // the problem with this  solution is it read complete file then send it to the response
    // fs.readFile('txt/test-file.txt',(error, data) => {
    //     if (error){
    //         console.log(error);
    //     }
    //     res.end(data);
    // })

//solution 2
// this is also not an optimize solution because read speed is more fast than write speed this
//problem is called back-pressure
//    const readable = fs.createReadStream('txt/test-file.txt');
//    readable.on('data',chunk=>{
//     res.write(chunk);
//    })
//    readable.on('end',()=>{
//     res.end();
//    })
//    readable.on('error',error=>{
//     console.log(error);
//     res.statusCode = 500;
//     res.end("File not found: " );
//    })


// solution 3
// this is the optimal solution
const readable = fs.createReadStream('txt/test-file.txt');
readable.pipe(res);
//explaination 
//readableSource.pipe(writeableDestination); readable is the readableSource and res is writableDestination

})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening...");
})