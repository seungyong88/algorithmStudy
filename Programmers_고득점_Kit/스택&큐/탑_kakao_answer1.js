function solution(heights) {
  return heights.map((v, i) => {
      while (i) {
          i--;
          if (heights[i] > v) {
              return i + 1;
          }
      }
      return 0;
  });
}