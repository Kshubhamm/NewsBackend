const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());

const newsRoute = express.Router();
app.use('/news',newsRoute)

const {getNews,postNews,updateNews,deleteNews} = require('./model/newsModel')
newsRoute
.route('/')
.get(getNews)
.post(postNews)
.patch(updateNews)
.delete(deleteNews);
