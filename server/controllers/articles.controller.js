let httpResult = require("../utils/httpResult"),
    request = require("request"),
    parseString = require('xml2js').parseString

module.exports = {
    getAll(req, res) {
        request.get(process.env.MEDIUM_RSS_URL, (err, resp, body) => {
            parseString(body, (err, result) => {
                let rssArticles = result.rss.channel[0].item,
                    articles = []
                for(let article of rssArticles) {
                    let content = article['content:encoded'][0]
                    content = content.substring(0, content.indexOf("<hr"))
                    articles.push({ 
                        title: article.title[0],
                        content,
                        date: new Date(article.pubDate[0]), 
                        link: article.link[0] 
                    })
                }
                httpResult.ok(res, articles)
            })
        })
    }
}