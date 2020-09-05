// dictionary
// 딕셔너리
// 배열의 일종
// 전문적으로 얘기해서 키 벨류 를 쌍으로 갖고있는 것
// arr[0]=1
// arr[5]=6

// dict["key"]="value"
// dict["어렵다"] = "행동이나 생각을 하기 조금 힘든 상황"
// let student ={}
// student["이름"] = "송후섭"
// student["나이"] = "2x"
// student["직업"] = "software developer"
// // let keys = Object.keys(student)
// // console.log(keys)
// console.log(student.나이)

// let arr2 = new Array(5)
// for (let n = 0; n < arr2.length; n++) {
//     arr[n]= {}
//     let name =arr[n]["name"]= prompt()
//     let age =arr[n]["name"]= prompt()
//     let ID_number =arr[n]["name"]= prompt()
// }

let arr = [9,2,6,4,1,3]
arr.sort(function(a,b){
    return a < b ? 1 : -1
});
console.log(arr)
