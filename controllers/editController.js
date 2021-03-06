const Article = require("../models/Article");

const editView =  (req, res) => {
    const typedTitle = req.params.id
    Article.find({}, (err, foundItems) => {
        foundItems.forEach((article) => {
            if(article.id === req.params.id ) {
                if(req.user._id.valueOf() === article.user.valueOf()) {
                    let checkBoxStatus = "checked"

                    if(article.status == "private")
                    checkBoxStatus = ""

                    res.render("edit", {
                        userId: article.user,
                        userName:req.user.name,
                        icon: req.user.icon,
                        title: article.title,
                        teaser: article.teaser,
                        image: article.image,
                        content: article.sourceContent,
                        id: article._id,
                        date: article.date,
                        checkBoxStatus: checkBoxStatus                        
                    })
                } else {
                    res.render("login")
                }                
            } 
        })    
    })    
};
  
module.exports = {
    editView,
};