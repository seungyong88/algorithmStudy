function solution(clothes) {
  let clothesMap = new Map();
  let anwser = 1;
    
  clothes.forEach(item => {
    if(!clothesMap.get(item[1])) {
      clothesMap.set(item[1], []);
    }

    clothesMap.get(item[1]).push(item[0]);
  })

 
  clothesMap.forEach(key => anwser *= key.length+1);

  return anwser-1;
}nwser-1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));
