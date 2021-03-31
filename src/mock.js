const Mock = require('mockjs');

const allKey = [
    "政策", '增值税', '税纳', '税收减免', '这是测试数据', '555555', '测试'
]

const lawNos = [
    "财政部", '税务总局', '海关总署公告'
]

const produceNewDate = function() {
    let articles = [];
    for (let i = 0; i < 7; i++) {
        let newArticleObj = {
            lawEffectId: 53,
            lawNo: lawNos[i % 3],
            oldDocId: null,
            provinceId: 732,
            publishDate: "2019-03-20",
            readid: 1912,
            reviseDate: null,
            taxId: "35",
            topFlag: "1",
            topOrder: 1,
            userId: 2152,
            viewCount: 141,
        }
        articles.push(newArticleObj);
    }
    return {
        articles: articles
    }
}

const keysData = function() {
    let articles = [];
    for (let i = 0; i < 7; i++) {
        articles.push(allKey[i]);
    }
    return {
        articles: articles
    }
}
// 需要几个接口就定义几个function,
//Mock.mock(url(接口地址),method(接口方式),上面定义的数据);
Mock.mock('http://localhost:8080/searchKey', 'post', keysData)
Mock.mock('http://localhost:8080/search', 'post', produceNewDate);
