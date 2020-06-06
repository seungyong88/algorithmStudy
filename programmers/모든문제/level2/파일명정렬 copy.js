function recheck(item) {
  var regexNum = /[0-9]/g;
  var alpahNum = /[a-z]/g;
  let position1 = null;
  let position2 = null;
  if(item.match(regexNum)){
    position1 = item.indexOf(item.match(regexNum)[0]);
  }

  if(item.match(alpahNum)){
    position2 = item.indexOf(item.match(alpahNum)[0]);
    return item.substring(position1, position2);
  }else{
    return item;
  }
}

function solution(files) {
  // var regexp = /^[0-9]*$/;
  var regexNum = /[0-9]/g;
  var filesMap = new Map();
  var fileNameArr = [];
  var anwser = [];

  files.forEach((item, index) => {
    let pointPosition = item.indexOf(".");       

    
    let head = item.substring(0, position);
    let number = item.substring(position, pointPosition);
    // let tail = item.substring(item.indexOf("."), item.length);
    
    let mapName = head.toUpperCase();


    if(!filesMap.get(mapName)) {
      filesMap.set(mapName, []);
    }

    filesMap.get(mapName).push({
      // head,
      oriName: item,
      number,
      // tail
    })
  })

  filesMap.forEach((value, key) => {
    // value.sort((a,b)=> {
    //   let tempA = recheck(a.number);
    //   let tempB = recheck(b.number);
    //   return tempA > tempB ? 1 : (tempA == tempB ? 0 : -1);
    // });

    // console.log(test);
    // filesMap.set(key, test);

    // console.log('sdsdsd', test);
    fileNameArr.push(key);
  })



  console.log(filesMap);

  fileNameArr.sort().forEach((item, index) => {
    filesMap.get(item).forEach(name => anwser.push(name.oriName));
  });

  return anwser;
}

// solution(["img12img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG", "IMG00000001.jpg", "bbb01.jpg", "foo010bar020.zip"]);

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
// console.log(solution(["img12img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG", "IMG00000001.jpg", "bbb01.jpg", "foo010bar020.zip"]))
// console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]))
// console.log(solution(["muzi1.txt", "MUZI1.txt", "muzi001.txt", "muzi1.TXT"]));



function test(arr) {
 
}

console.log(test([ { number: "12img12"}, {number:"10"}]));