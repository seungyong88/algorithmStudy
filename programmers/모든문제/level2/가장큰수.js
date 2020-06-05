function solution(arr) {
  if(parseInt(arr.join("")) === 0) return "0";
  var anwser = '';
  arr.sort((a,b) => {
    if(String(b).split("")[0] > String(a).split("")[0]) return 1;
    if(String(b).split("")[0] < String(a).split("")[0]) return -1;
    if(String(b).split("")[0] == String(a).split("")[0]) {
      let tempA = String(a).repeat(4).slice(0,4);
      let tampB = String(b).repeat(4).slice(0,4);
      if(tempA > tampB) return -1;
      if(tempA < tampB) return 1;
      if(tempA == tampB) return 0;
    }
  })

  return arr.join("");
}
console.log(solution([6,2,10]))
console.log(solution([3, 30, 34, 5, 9]))
console.log(solution([0, 0, 0, 0]));
