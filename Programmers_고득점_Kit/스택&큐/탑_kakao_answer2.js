function solution(heights) {
    return heights.map((v, i, e) => {
        for (i--; i > -1; i--) {
            if (e[i] > v) break;
        }
        return ++i;
    });
}