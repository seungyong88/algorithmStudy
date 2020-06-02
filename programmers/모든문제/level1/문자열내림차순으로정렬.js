function solution(s) {
  var anwser = s.split("");

  anwser = anwser.sort(function(a, b) {
    return b.charCodeAt(0)-a.charCodeAt(0);
  }).join("");
  return anwser;
}

console.log(solution("Zbcdefg"));