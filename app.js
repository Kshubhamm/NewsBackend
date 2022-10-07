const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());

const newsRoute = express.Router();
app.use('/news',newsRoute)


newsRoute
.route('/')
.get(getNews)
.post(postNews)
.patch(updateNews)
.delete(deleteNews);

let news = [
        {   id : 1,
            data : "Modi hit"
        }

        ];
function getNews(req,res)
{
    //console.log("Here are your news");
    res.json({
        message: 'News',
        data: news
    })
}
function postNews(req,res)
{
    let toBePosted = req.body;
    //console.log(toBePosted);
    news.push(toBePosted);
    res.send("News pushed!!");
}
function updateNews(req,res)
{
    let newNews = req.body;
    console.log(newNews);
    console.log(newNews.id);
    let smth = news.find(obj => obj.id === newNews.id);
    smth.data = newNews.data;
    console.log(smth);
   
    res.send("Updated sir!!");
}
function deleteNews(req,res)
{
    let id = req.body.id;
    news.splice(news.findIndex(a => a.id === id),1);

    res.send("Delted Succesfully!!");
}