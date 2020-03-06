var score = [4, 11, 2, 10, 3, 1]; 

/* 오류 */
// score.sort(); // 1, 10, 11, 2, 3, 4 
              // ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음

/* 정상 동작 */
score.sort(function(a, b) { // 오름차순
  console.log(a, b);
    return a - b;
    // 1, 2, 3, 4, 10, 11
});

// score.sort(function(a, b) { // 내림차순
//     return b - a;
//     // 11, 10, 4, 3, 2, 1
// });





// function solution(strings, n) {
//   var answer = [];

//   // strings.sort((a,b) => )
//   return answer;
// }

// // strings	n	return
// var arr1 = ['sun', 'bed', 'car'];
// var n1 = 1;	
// // [car, bed, sun]
// var arr2 = ['abce', 'abcd', 'cdx'];
// var n2 = 2;	
// // [abcd, abce, cdx]

// console.log(arr1, n1);
// console.log(arr2, n2);


