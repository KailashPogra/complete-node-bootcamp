
const fs = require('fs');
const http = require('http');
const url = require('url');
//////////////////////////////
////Files

// blocking , synchronous technique
// read file
// const textIn = fs.readFileSync('./txt/input.txt', 'utf8');
// console.log(textIn);
// write file
// const textOut = `this is we know about avocado :${Date.now}:${textIn}`;
// fs.writeFileSync('./txt/input.txt', textOut);
// console.log('file written successfully');

// non-blocking , Asynchronous technique
  // in this example "file read successfully" print first then it return asynchronous function

// fs.readFile('./txt/start.txt',"utf-8",(err, data1) => { 
//     fs.readFile(`./txt/${data1}.txt`,"utf-8",(err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt',"utf-8",(err, data3) => {
//             console.log(data3);
//            fs.writeFile('./txt/final.text',`${data2}\n${data3}`,'utf-8',err=>{
//             console.log(err);
//             console.log('your file has been written');
//            }); 
//         }); 
//     });
// });
// console.log('file read successfully');

///////////////////////////
/////////Sarver
const data = fs.readFileSync('1-node-farm/dev-data/data.json','utf-8');
const productData = JSON.parse(data);
console.log(data);
const Sarver = http.createServer((req, res)=>{
  const pathName = req.url;
  
  if (pathName=='/'||pathName=='/overview') {
    res.end('jai shree ram');
  }else if (pathName=='/product') {
    res.end('this is a product');
  }else if (pathName=='/api'){
    res.writeHead(
      200,
      {
        'Content-Type': 'application/json',
    });
    res.end(data);
  }else{
    res.writeHead(404,
      {
        'Content-Type': 'text/html',
        'my-own-header': 'hello world',
    });
    res.end('<h1>page not found</h1>');
  }
});
  
Sarver.listen(8000,'127.0.0.1',()=>{
    console.log('Listning the request on 8000 port');
})