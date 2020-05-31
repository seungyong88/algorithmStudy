class HashTable{
  constructor() {
    this.table = [];
  }

  loseloseHashCode(key){
    var hash = 0;
    for (var i=0; i < key.length; i++) {
      // console.log(key.charCodeAt(key[i]));
      hash+= key.charCodeAt(key[i]);
    }

    return hash%37;
  }

  put(key, value){
    var position = this.loseloseHashCode(key);
    this.table[position] = value;
  }

  get(key) {
    return table[this.loseloseHashCode(key)];
  }

  remove(key) {
    table[this.loseloseHashCode(key)] = undefined;
  }
}

var hash = new HashTable();
hash.put("Gandalf",'aaaaaaaaaaaaaa');
// hash.put("John",'bbbbbbbbbbbbbb');
// hash.put("Tyrion",'cccccccccccc');

console.log(hash);