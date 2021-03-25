const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 2121

app.use(cors())

let rappers ={
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 27,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/rap/:name', (request,response)=>{
    const rapName = request.params.name.toLowerCase()
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['unknown'])
    } 
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})