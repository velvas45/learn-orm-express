const {Article} = require('./models');

Article.create({
    title:'HEllo World2',
    body:"lorem ipsum2",
    approved: false
})
.then(artikel => console.log(artikel))
.catch(err => console.log(err));