class ArrayList{
  constructor() {
    this.array = [];    
  }

  insert(item) {
    this.array.push(item);
  } 

  toString(){
    return this.array.join("");
    // join(",")으로
    //join("")을 잘 기억해두자
  }
}


let arr = new ArrayList();
arr.insert(3);
arr.insert(4);
arr.insert(5);

console.log(arr.toString());
