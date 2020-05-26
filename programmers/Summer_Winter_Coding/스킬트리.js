function solution(skill, skill_trees) {
  let answer = 0;
  let lastIndex = -10;
  
  skill_trees.forEach(skilltree => {
    lastIndex = -10;

    skill.split("").forEach((item, index) => {
      if(lastIndex === -10) {
        lastIndex = skilltree.indexOf(item);
      }

      if(skilltree.indexOf(item) > lastIndex) {
        return;
      }
        
      answer++;
    })
  })


  console.log(answer);
}


solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);