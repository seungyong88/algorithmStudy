function solution(skill, skill_trees) {
  var regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees
      .map((x) => x.replace(regex, '')) // [ 'BCD', 'CBD', 'CB', 'BD' ]
      .filter((x) => {
          let temp = skill.indexOf(x) === 0
          return temp;
      })
      .length
}

// console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
console.log(solution("CBD",  ["BACDE", "CBADF", "AECB", "BDA"]));

// function solution(skill, skill_trees) {
//   var regex = new RegExp(`[^${skill}]`, 'g');

//   return skill_trees
//       .map((x) => x.replace(regex, ''))
//       .filter((x) => {
//           return skill.indexOf(x) === 0 || x === "";
//       })
//       .length
// }