var n = 100;
var cards = new Array(n).fill(false);

for(var i=2; i < n+1; i++) {
  j = i - 1;
  while( j < cards.length) {
    cards[j] = !cards[j];
    j += i;
  }
}


for(var i=0; i<cards.length; i++) {
  if(!cards[i]) {
    console.log(i+1);
  }  
}

// console.log(cards);