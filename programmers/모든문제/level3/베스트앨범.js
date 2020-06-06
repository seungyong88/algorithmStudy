function solution(genres, plays) {
  let answer = [];
  let genreCountMap = new Map;
  let songMap = new Map();

  genres.forEach((genre, index) => {
    if(!songMap.get(genre)){
      genreCountMap.set(genre, 0);
      songMap.set(genre, []);
    }

    songMap.get(genre).push({
      index,
      genre,
      plays: plays[index]
    })

    genreCountMap.set(genre, (genreCountMap.get(genre)+plays[index]));
  });

  songMap.forEach((genre, key) => {
    genre.sort((a,b) => {
      if(a.plays > b.plays) return -1;
      if(b.plays > a.plays) return 1;
      if(a.plays == b.plays) {
        return a.index - b.plays;
      }
    })
  })

  let temp=[]

  genreCountMap.forEach((plays, genre) => {
    temp.push({ genre, plays });
  })

  temp.sort(function(a,b) {
    return b.plays-a.plays;
  })

  temp.forEach(obj => {
    songMap.get(obj.genre).forEach((genre, index) =>{
      if(index < 2) {
        answer.push(genre.index);
      }
    })
    // console.log(songMap.get(obj.genre).);
  })

  return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [2300, 600, 150, 1200, 3000])); // 4,1,0,3
console.log(solution(["classic", "pop", "classic", "classic", "pop"], [800, 600, 800, 800, 2500]));
// console.log(solution(["classic", "pop"], [500, 600, 150]));
// console.log(solution(["classic", "pop", "ddd"], [500, 600, 150]));
// console.log(solution(["classic", "classic", "classic"], [500, 600, 150]));
