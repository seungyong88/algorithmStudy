class Dirtionary{
  constructor() {
    this.items = {}
  }

  has(key) {
    return key in this.items;
  }

  set(key, value) {
    this.items[key] = value;
  }

  remove(key) {
    if(this.has(key)){
      delete item[key];
      return true;
    }

    return false;
  }

  get(key) {
    return this.has(key) ? items[key] : undefined;
  }

  values(){
    let arr = []; 

    for(var key in this.items) {
      arr.push(this.items[key]);
    }

    return arr;
  }

  keys(){
    let arr = []; 

    for(var key in this.items) {
      arr.push(key);
    }

    return arr;
  }

  getItems() {
    return this.items;
  }

}

let dirtionary = new Dirtionary();

dirtionary.set(1, "aaa");
dirtionary.set(2, "bbb");
dirtionary.set(3, "ccc");

console.log(dirtionary.keys());
console.log(dirtionary.values());
console.log(dirtionary.getItems());
