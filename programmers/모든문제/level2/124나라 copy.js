function solution(n) {
  var key = [1,2,4];
  var anwser = "";
  var number = 0;

  var temp = [1,2,4];
  var temp2 = [1,2,4];

  for(var i=0; i < n; i++) {

    if(temp2.length === 0) {
      temp2 = key.slice();
    }

    if(temp.length === 0) { // 배열이 비어있으면 리필
      temp = key.slice();
      console.log(i);
      // anwser = 

    }

    if((i % 3 === 0) && (i > 2)) {
      // 이때가 액션
      anwser = temp.shift();
    }

    number = key[i%3];
  }
  // console.log(anwser, number);

  return anwser+""+number;
}


// for(var i =1; i< 20; i++) {

//  solution(i);
// }

solution(14);
