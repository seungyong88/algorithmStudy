function solution(board, moves) {
  let result = 0, resultArr = [];

  moves.forEach((moveIndex, i) => {
    board.some(boardItem => {
      if(boardItem[moveIndex-1] !== 0) {
        resultArr.push(boardItem[moveIndex-1]);
        boardItem[moveIndex-1] = 0;     
        return true;
      } 
    });

  });

  var i =0, current1=null, current2=null;

  while(i < resultArr.length){
    current1 = resultArr[i-1], current2 = resultArr[i];

    if(current1 === current2) {
      resultArr.splice(i, 1);
      resultArr.splice(i-1, 1);
      result = result+2;
      i=i-1;
    }else{
      i++;
    }
  }

  return result;
}

let arr1 = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]
];
let arr2 = [1,5,3,5,1,2,1,4];

console.log(solution(arr1, arr2));