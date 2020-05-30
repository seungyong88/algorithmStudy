class Set{
  constructor() {
    this.items = {};
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if(!this.has(value)){
      this.items[value] = value;
      return true;
    }

    return false;
  }

  values() {
    return Object.keys(this.items);
  }

  size() {
    return Object.keys(this.items).length;
  }

  union(otherSet) {
    let values = Object.keys(this.items);
    let unionSet = new Set();
    let otherSetArr = otherSet.values();

    for(var i=0; i < values.length; i++) {
      unionSet.add(values[i]);
    } 

    for(var i=0; i < otherSetArr.length; i++) {
      if(!unionSet.has(otherSetArr[i])){
        unionSet.add(otherSetArr[i]);
      }
    }

    return unionSet;
  }

  interSection(otherSet) {
    let interSectionSet = new Set(); // 새 객체 생성
    // let values = this.items.values(); // 현재 객체 배열로 가져옴
    let otherSetArr = otherSet.values();
    
    for(var i=0; i < otherSetArr.length; i++) {
      if(this.has(otherSetArr[i])) {
        interSectionSet.add(otherSetArr[i]);
      }
    }

    return interSectionSet;
  }

  diffrence(otherSet){
    let diffrenceSet = new Set();

    let values = this.values();
    for(var i=0; i< values.length; i++) {
      if(!otherSet.has(values[i])) {
        diffrenceSet.add(values[i]);
      }
    }

    return diffrenceSet;
  }

  subset(otherSet){

    if(this.size() < otherSet.size()) {
      return false;
    }else{
      // 여기서부터 부분검사
      let otherSetArr = otherSet.values();
      for(var i=0; i < otherSetArr.length; i++){
        if(!this.has(otherSetArr[i])){
          return false;
        }
      }

      return true;
    }

  }
}


let setA = new Set();

setA.add(1);
setA.add(2);
setA.add(3);
console.log(setA.values());
console.log(setA.size());
let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(3);
setB.add(5);

let setC = new Set();
setC.add(3);
setC.add(4);

let setAB = setA.union(setB);
console.log(setAB.values());

let interSectionAB = setA.interSection(setB);
console.log(interSectionAB.values());

let diffrenceSetAB = setA.diffrence(setB);
console.log(diffrenceSetAB.values());

let subSetCheck = setA.subset(setC);
console.log(subSetCheck);

let subSetCheck2 = setB.subset(setC);
console.log(subSetCheck2);