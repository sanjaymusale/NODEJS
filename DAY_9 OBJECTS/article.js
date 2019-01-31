//create an object called as article
//this article object must have properties title ,body,author,publisheddate,category

const article = {
   
        'title':'forgotten pm',
        'body':'the never remembered pm of india','author':'ramprasad',
        'publisheddate':'27 nov',
        'category':'politics',
        'comments':[
            {'name':'rakesh','title':'Marvellous','body':'it is wonderfully written'},
            {'name':'raju','title':'amazing','body':' the book is interesting'}
        ]
}

article.comments.forEach(function(art){
    console.log(`${art.name}`)
    console.log(`${art.title}`)
    console.log(`${art.body}`)

})
    
