function solution(files) {

  const re = /^([A-Za-z]+)([0-9]+)(.*)$/;
  //^ 처음
  //$ 끝

  files.forEach(item => console.log(item.match(re)));
  // return files;
}

// function solution(files) {
//   const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/
//   let dict =   []
//   files.forEach((entry, idx) => {
//       let [fn, head, num] = entry.match(re)
//       dict.push({fn, head: head.toLowerCase(), num: parseInt(num), idx})
//   })

//   return dict.sort((a, b) => {
//       if (a.head > b.head) return  1
//       if (a.head < b.head) return -1
//       if (a.num > b.num) return  1
//       if (a.num < b.num) return -1
//       return a.idx - b.idx
//   }).map(e => e.fn)
// }

// console.log(000001 === 1);

// console.log(solution(["IMG01.GIF", "IMG00000001.png", "img1.png"]));

// console.log(solution(["img12img12.png"]));
// console.log(solution(["img12img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG", "IMG00001.jpg", "bbb01.jpg", "foo010bar020.zip"]));
// console.log(solution(["img12.png","IMG00000001.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
console.log(solution(["img12img12.png", "foo010bar020.zip", "img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));

// console.log(solution([ { number: "12img12"}, {number:"10"}]));

// console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]))


// console.log(solution(["img12img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG", "IMG00000001.jpg", "bbb01.jpg", "foo010bar020.zip"]))
// console.log(solution(["muzi1.txt", "MUZI1.txt", "muzi001.txt", "muzi1.TXT"]));
