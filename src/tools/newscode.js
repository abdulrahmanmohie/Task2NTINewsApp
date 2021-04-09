const request = require('request')
const newscode = (callback)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=eg&apiKey=9d293aa66485429a80420bf45a67b1dd`
    request({url,json:true},(error,response)=>{
        const sections = response.body.articles
        if(error){
            callback('unable to connect', undefined)
        }
        else{
                let image = response.body.articles[0].urlToImage
                let title = response.body.articles[0].title
                let description = response.body.articles[0].description
                callback(undefined,{
                    image: image,
                    title:title,
                    description:description,
                    sections:sections
                })            
        }
    })
}
module.exports = newscode