/**
* 플레이어의 수를 입력 받고, 각 플레이어는 이름과 점수를 가질 수 있어야 한다.
* 플레이어의 수를 입력 후 카드의 갯수를 입력 받아 각 플레이어에게 분배하며, 카드의 점수는 중복될 수 있다.
* 카드가 분배되면 카트 점수의 합으로 승자를 결정하고, 점수의 합이 같을 경우 후순위 플레이어가 이기게 된다.
* 게임 종료 시 승리한 플레이어의 이름, 카드 리스트, 점수의 합을 [출력 예]와 같이 출력하고 종료한다.
* 승자: player1
* 점수: 47
* 보유카드: 19, 11, 14, 13
*/

/**
* 플레이어 이름: play + number
* 카드의 갯수: 입력수 * playNumber
* 승리 요건 : 점수의 합, 동률일 경우 후순위
* 종료시 출력
*/


// 카드 숫자를 생성한다

function init() {
  var playerCount, cardCount;

  function Player(number, priority) {

  }

  function inputData() {
    playerCount = window.prompt("플레이어 수를 입력하세요.");
    cardCount = window.prompt("받을 카드 갯수를 입력하세요");
  }

  function getCardNumber() {
    return Math.floor(Math.random * (20 -1));
  }

  inputData();

  console.log(playerCount, cardCount);
}

init();