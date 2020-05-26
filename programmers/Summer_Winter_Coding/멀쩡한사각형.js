function getGCD(value1, value2) {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    return;
  }
  // value1과 value2 중 큰 값을 기준으로 값을 선택
  let num = value1 > value2 ? value1 : value2;
  let max;

  for (let i = 1; i <= num; i++) {
    if (value1 % i === 0 && value2 % i === 0) {
      max = i;
    }
  }

  return max;
}

function solution(w, h) {
  var g = getGCD(w,h)
  console.log(w*h-(w+h-g));
}

solution(8, 12);