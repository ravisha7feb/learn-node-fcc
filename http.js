const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Welcome to home page")
    }
    else if(req.url === '/about'){
        res.end("This is the about us page")
    }
    else{
        res.end(`<h1>Error 404 </h1> 
                 <a href="/">HOME</a>
        `)
    }
})

server.listen(5000)