// 변수 예제
// var let const의 차이 
// 재선언과 재할당
// 재선언은 같은 이름으로 변수를 만들어도 괜찮다 
// 재선언을 하면 그 전에 무슨값을 갖고 있었던 잃어버린다.
// 대신 같은 변수명을 사용은 계속 가능하다

// ㅁ = 10 ㅁ = 20  ㅁ = 30
   // 첫 선언 : 첫번쨰 사람 너 a해 넌 10이야
   // 재할당 : a 너 이제 15해 (a는 첫번쨰 사람) 
   // 첫번째 사람이 이제 15

   // 재선언 : 두번째사람 이제부턴 니가 a야 넌 20이야.

   // 게임 자기가 주로 캐릭터
   // 재선언 : 계정 새로파
   // 재할당 : 비번 바꾸기 안에 부캐를 본캐로 변경하기

// 재할당은 변수에 들어가있는 값을 변경수 있다.

// var 예제

// var a = 10
// console.log(a)
// a = 20
// console.log(a)
// var a = 30
// console.log(a)

// var 이름 = "송후섭"

// var 이름 = "최진우"
// console.log(이름)


// // let 예제
// let a = 10
// console.log(a)
// a = 20
// console.log(a)

// // 안되는 코드
// // let a = 10
// // console.log(a)
// // 되는 코드
// a = 10
// console.log(a)


// var 임시저장소 = "임시 내용"
// ~1000줄 뒤에
// 2000 year later

// var 임시저장소 = "다른 임시내용"

// var 
// 같은반에 a-1가 있는데 다른 a-2가 전학을 왔다
// 이전 a를 부르는데 컴퓨터는 새로운 a만 안다

// let
// 같은반에 a가 있는데 다른 a가 전학올라고 한다
// 컴퓨터는 a가 있기떄문에 같은반에 넣지 않고 에러를 만든다

// const
// const a = 10
// 1은 1이다
// 1은 2가 될수도 3이 될수도 없다
// 절대적
// console.log(a)
// // 이 아래는 무조건 에러
// a =. 20
// console.log(a)
// const a = 30
// console.log(a)

// 게임 서버 최대 수용가능 인원 = 10
// const max_people = 10
// 최대값 최소값
// 절대적인 값

// const값으로 10 과 20을 선언
// 입력받은값을 a라는 변수에 저장
// a+10 과 a+20을 const를 사용해 출력


// 변수 = 저장소
// 저장할껀데
// 굳이 저장하면서 저장할 값을 선언 해줘야할까?
// 내가 창고를 만들면서 그 창고에 뭐를 꼭 넣어줘야될까?
// 꼭 넣어줄 필요는 없다 .

// let result
// let first_num = number(prompt())
// let second_num = number(prompt())
// result 저장소가 있으면 두 넘버를 더해라
// result = first_num + second_num
// 나중에 코드
// 이 저장소 존재해?

// 모든 합 계산할 저장소 만든뒤 
// 3가지 숫자 받아 합 계산소에 저장후 출력

// 변수의 타입
// let string = "저는 문장입니다."
// let number = 100
// let float = 1.2222
// let ox = true

// console.log(typeof string)
// console.log(typeof number)
// console.log(typeof float)
// console.log(typeof ox)
// let input = prompt()
// console.log(typeof input)
// // 10 20 을 받아왔는데 1020

// prompt 로 받는 숫자의 타입 출력
// 2개 받아온 값의 합을 출력한 뒤 
// 합의 타입 출력
// 예상되는 출력 
// string
// string
// 숫자의 합이 아닌 문자열의 합 예> 10과 20을 받을경우 30이 아닌 1020이 출력되어야한다
// string























