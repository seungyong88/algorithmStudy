function solution(N, stages) {
  var anwser = [];
  var dataMaps = new Map();

  for(var i=1; i <= N+1; i++) {
    dataMaps.set(i, {
      id: i,
      mans: 0,
      failer: 0,
      persent: 0,
    });
  }

  stages.forEach((item, index) => {
    for(var j=1; j <= item; j++) {
      var data = dataMaps.get(j);
      data.mans++;
      if(item === j) {
        data.failer++;
      }
    }
  });

  for(var i=1; i <= N; i++) {
    var data = dataMaps.get(i);
    data.persent = (data.failer/data.mans) || 0;
    anwser.push(data);
  }

  console.log(anwser);

  return anwser.sort(function(a,b) {
    return b.persent - a.persent;
  }).map(item=> item.id);

}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4]));
console.log(solution(8, [1, 2, 3, 4, 5, 6, 7]));
