const express = require('express')
const app = express()
const port = 3000

const newscode = require('./tools/newscode')

app.get('/', (req,res)=>{

    newscode((error,data)=>{
        if(error){
            return res.send({error})
        }
        const sections = data.sections
        let section = []
        sections.forEach(element => {
            section.push({
                img:`${element.urlToImage}`,
                titles:element.title,
                descriptions:element.description
            })

        })
        res.render('index',{
            section
        })
    })
})
console.log('after')
const path = require('path')
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory)) 
app.set('view engine','hbs'); 
const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)
const hbs = require('hbs')
const partialPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialPath)

app.listen(port,() =>{ //--> to make connection with the port
    console.log('Listening to port')
})