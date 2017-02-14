var fs = require('fs')
var toMD = require('to-markdown')
var axios = require('axios')
var cheerio = require('cheerio')

var pathSet = new Set()

var dfs = function (path) {
    if (pathSet.has(path)) return
    else {
        pathSet.add(path)
        axios.get('https://developer.mozilla.org' + path)
            .then((res) => {
                let $ = cheerio.load(res.data)
                if ($('#wikiArticle').html()) {
                    let content = toMD($('#wikiArticle').html())
                    let title = $('body').attr('data-slug').split('/').join('-')
                    fs.writeFile(`dist/${title}.md`, content, (err) => {
                        if (err) throw err
                        console.log(`${title}.md is saved`)
                    })
                    $('a').each(function () {
                        if (/\/zh-CN\/docs\/Web\/JavaScript\/Reference.*/.test($(this).attr('href'))) dfs($(this).attr('href'))
                    })
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
dfs('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects')
// axios.get('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects')
//     .then((res) => {
//         var $ = cheerio.load(res.data)
//         var content = toMD($('.onlyinclude').html())
//         var title = $('body').attr('data-slug').split('/').join('-')
//         fs.writeFile(`dist/${title}.md`, content, (err) => {
//             if (err) throw err
//             console.log(`${title}.md is saved`)
//         })
//     })