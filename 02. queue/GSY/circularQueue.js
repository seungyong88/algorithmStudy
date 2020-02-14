// es6
const Queue = require('./queue.es6');

function hotPotato(nameList, number) {
  let queue = new Queue();
  let eliminated = '';

  nameList.forEach(element => {
    queue.enqueue(element);
  });

  while(queue.size() > 1) {
    for(let j=0; j < number; j++) {
      queue.enqueue(queue.dequeue()); // 선형으로
    }

    eliminated = queue.dequeue();
    console.log(`${eliminated}가 게임에서 탈락 되었습니다.`);

    number -= 1;
  }

  return queue.dequeue();
}

let nameList = ['11111', '22222', '33333', '44444', '55555'];
let number = Math.floor((Math.random()*10));
let winner = hotPotato(nameList, number);

console.log(`최종 승자는 ${winner}입니다.`);