function solution(m, musicinfos) {
  var anwser = [];
  var obj = {}

  for (var i = 0; i < musicinfos.length; i++) {
    var arr = musicinfos[i].split(',');
    var a = arr[0].split(":");
    var b = arr[1].split(":");

    var length = (b[0] - a[0]) * 60 + (b[1] - a[1]);
    var str = '';

    arr[3] = arr[3]
      .replace(/(C#)/g, 'c')
      .replace(/(D#)/g, 'd')
      .replace(/(F#)/g, 'f')
      .replace(/(G#)/g, 'g')
      .replace(/(A#)/g, 'a')
    m = m.replace(/(C#)/g, 'c')
      .replace(/(D#)/g, 'd')
      .replace(/(F#)/g, 'f')
      .replace(/(G#)/g, 'g')
      .replace(/(A#)/g, 'a')


    for(var j=0; j< length; j++) {
      str += arr[3][j % arr[3].length];
      // atr += arr[3][j % arr[3].length];
    }

    console.log(str);

  }

  // console.log(m, musicinfos);
}

console.log(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]));