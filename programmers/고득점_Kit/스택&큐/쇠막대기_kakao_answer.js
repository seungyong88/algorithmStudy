function solution(arrangement) {
    let answer = 0,
        stack = [];

    arrangement = arrangement.replace(/\(\)/g, 0); // 레이저 0으로 치환

    for (let i = 0; i < arrangement.length; i++) {
        switch (arrangement[i]) { 
            case '(' : // (스택에 추가)
                stack.push(0);
                break;
            case '0':
                stack = stack.map(v => v + 1); // 레이저를 쏘면 스택에 있는 요소 +1
                break;
            case ')':
                answer += stack[stack.length - 1] + 1; // 닫는게 있으면 result에 추가
                stack.pop();
                break;
        }
    }

    return answer;
}


var arr1 = '()(((()())(())()))(())'; // 17
var arr2 = '(((()())(())()))'; // 15
console.log(solution(arr1));
console.log(solution(arr2));
