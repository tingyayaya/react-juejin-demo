const Mock = require('mockjs')
const baseURL = 'http://juejin-demo/api/v1'

const Random = Mock.Random
Mock.mock(`${baseURL}/entryList`, {
  "data|20":[
    {
      "hot": '@boolean',
      "column": '@boolean',
      "date1": '@datetime("yyyy-MM-dd HH:mm:ss")',
      "thumbnail|+1": [Random.image("60x60",'@color()',"我是缩略图"), ""],
      "sort|1-2": [
        {
          "name|+1": [
            "CSS",
            "GitHub",
            "Java",
            "设计模式",
            "NPM",
            "Javascript",
            "webpack",
            "Andrioa"
          ]
        }
      ],
      "title|+1": '@ctitle(10,64)',
      "thumb|1-300": 100,
      "comment|1-100": 50
    }
  ]
})