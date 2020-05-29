function pad(n, width) {
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(0) + n;
}

function solution(n, arr1, arr2) {
  var anwser = [];
  
  for(var i=0; i < n; i++) {
    var hint1 = pad((arr1[i]).toString(2), n);
    var hint2 = pad((arr2[i]).toString(2), n);
    var temp = '';

    for(var j=0; j < n; j++) {
      if( (hint1[j] == 1) || (hint2[j] == 1) ) {
        temp += '#';
      }else{
        temp += ' ';
      }
    }
    anwser.push(temp);
  }

  return anwser;
}

var arr1 = [9, 20, 28, 18, 11];
var arr2 = [30, 1, 21, 17, 28];
var n = 5;
console.log(solution(n, arr1, arr2));
//["#####","# # #", "### #", "# ##", "#####"]

var arr3 = [46, 33, 33, 22, 31, 50];
var arr4 = [27, 56, 19, 14, 14, 10];
var n2 = 6;
console.log(solution(n2, arr3, arr4));
//["######", "### #", "## ##", " #### ", " #####", "### # "]