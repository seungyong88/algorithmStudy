function solution(board) {
  var answer = 0;

  board.forEach((row, rowIndex) => {

    if(rowIndex !== 0 || rowIndex !== board.lengh-1 ) { // 가로 첫줄, 마지막줄 일때 pass
      row.forEach((column, columnIndex)=> {

        if(columnIndex !== 0 || columnIndex !== row.length - 1) { // 세로도 같음

          if(column === 0) { // 해당 칸이 0일때는 다이어 몬드 가능성

            if(board[rowIndex][columnIndex-1] == 1 && board[rowIndex][columnIndex+1] == 1 && board[rowIndex-1][columnIndex] == 1 && board[rowIndex+1][columnIndex] == 1) {
              answer++;
            }

            var startIndex = 0;
            var i = rowIndex;
            var j = 0;
            while(i < Math.ceil(row.length/2)) {
              i++;
              startIndex -= 2;
            }

          }

        }

      })
   }

  });

  return answer;
}