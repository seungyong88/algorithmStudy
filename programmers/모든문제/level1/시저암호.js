function solution(s, n) {
  let answer = s.split("").map((item, index) => {
    var number = s.charCodeAt(index);

    if(item == ' ') {
      return item;
    }else{
      number = number > 90 ? (number+n > 122? number-26+n: number+n): (number+n > 90?  number-26+n: number+n )
      return String.fromCharCode(number);
    }

  });

  return answer.join('');
}

console.log(solution("A", 27));
console.log(solution("z", 1));
console.log(solution("Z", 25));
console.log(solution("a B z", 1));