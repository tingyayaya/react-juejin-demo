const Mock = require('mockjs')
const baseURL = 'http://juejin-demo/api/v1'

const mockEntryList = {
  "hot": '@boolean',
  "column": '@boolean',
  "auth": '@cname',
  "authId":/[a-z0-9]{24}/,
  "date": '@datetime("yyyy-MM-dd HH:mm:ss")',
  "thumbnail": {
    "flag|1": false,
    "img": '@image(60x60, @color(),#FFF,png,Hello)'
  },
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
  "title|+1": '@ctitle(1,40)',
  "thumb|1-300": 100,
  "comment|1-100": 50
}

Mock.mock(`${baseURL}/entryList`, (options) => {
  const { name } = JSON.parse(options.body)
  switch ( name ) {
    case 'frontend': 
    return Mock.mock({
      "data|8":[ mockEntryList ]
    })
    case 'android': 
    return Mock.mock({
      "data|12":[ mockEntryList ]
    })
    case 'backend': 
    return Mock.mock({
      "data|10":[ mockEntryList ]
    })
    case 'ai': 
    return Mock.mock({
      "data|16":[ mockEntryList ]
    })
    case 'ios': 
    return Mock.mock({
      "data|12":[ mockEntryList ]
    })
    case 'freebie': 
    return Mock.mock({
      "data|3":[ mockEntryList ]
    })
    case 'article': 
    return Mock.mock({
      "data|4":[ mockEntryList ]
    })
    case 'devops': 
    return Mock.mock({
      "data|5":[ mockEntryList ]
    })
    default: 
    return Mock.mock({
      "data|20":[ mockEntryList ]
    })
  }
  
})

const mockBooks = {
  "bookId": /[a-z0-9]{24}/,
  "thumbnail": '@image(100x140, @color(), #FFF, png, Hello)',
  "presell": '@boolean',
  "title": '@ctitle(1, 20)',
  "subtitle": '@cparagraph(1, 2)',
  "profilePhoto": '@image(60x60, @color(), #FFF, png, Hello)',
  "auth": '@cname',
  "introduction": '@ctitle(1, 20)',
  "postion": '@ctitle(1, 20)',
  "price|1-100": 1,
  "sales|1-100000": 1,
  "chapter|1-60": 1,
  "duration|1-500" : 1
}

Mock.mock(`${baseURL}/bookList`, (options) => {
  const { name } = JSON.parse(options.body)
  switch ( name ) {
    case 'books': 
    return Mock.mock({
      "data|20":[ mockBooks ]
    })
    default: 
    return Mock.mock({
      "data|10":[ mockBooks ]
    })
  }
})