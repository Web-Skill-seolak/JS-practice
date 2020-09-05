// json file 읽기!!!!!
// 이건 거의 안씀
// 왜냐 jquary가 더 쉬워서
// 

const fs = require('fs')

fs.readFile('./sample.json', 'utf8', (err, jsonfile_content) => {
    if (err) {
        console.log("파일을 읽는 도중 에러가 났습니다.")
    }
    else{
        let naeyong = JSON.parse(jsonfile_content)
        // jsonfile_content 은 문자열 형태

        console.log(jsonfile_content)
        console.log(jsonfile_content["age"])
        // naeyong은 딕셔너리 형태
        console.log(naeyong)
        console.log(naeyong)
    }
    
    
})

// const customer = {
//     name: "",
//     order_count: 0,
//     address: "",
// }
// const jsonString = JSON.stringify(customer)
// console.log(jsonString) 
// fs.writeFile('./newCustomer.json', jsonString, err => {
//     if (err) {
//         console.log()
//     } else {
//         console.log()
//     }
// })