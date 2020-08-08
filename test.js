// console.log("whoseop")
// alert("sdasd")
// prompt(" 입력 ")
// // 첫번쨰 방법
// aconsole.log(Number(n) + 10)

// // 두번쨰 방법 = n을 숫자로 미리 변환 나중에 사용할때 숫자로 계속 사용 가능하다
// n = Number(n);
// console.log(n + 10);

// let input_number1 = 10;
// let input_number2 = 20;
// let input_number3 = 30;

// console.log(input_number3+input_number2+input_number1);

// console.log(document.getElementById("id").innerHTML + prompt("이름을 입력하세요"))
// document.getElementById("id").innerHTML = document.getElementById("id").innerHTML + prompt("이름을 입력하세요")

// <h1> 이름은 :  </h1>
// <h1> prompt("이름을 입력하세요") </h1>

console.log(document.getElementById("id").innerHTML)
let before = document.getElementById("id").innerHTML
console.log(before+1)
document.getElementById("id").innerHTML += "이름"
// document.getElementById("id").innerHTML = document.getElementById("id").innerHTML + "이름"
// document.getElementById("id").innerHTML = before + prompt("이름을 입력하세요")