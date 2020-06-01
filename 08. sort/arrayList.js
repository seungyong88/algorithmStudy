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

  bubbleSort() {
    var length = this.array.length;

    // 5 3 2 6 9 8 5 1 

    for(var i=0; i< length; i++) {
      for(var j=0; j< length-1; j++) { 
        var arr1 = this.array[j];
        var arr2 = this.array[j+1];
        if(arr1 > arr2) {
          this.swap(j, j+1);
        }
      }
    }
  }

  swap(index1, index2) {
    var aux = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = aux;
  }
}

let arr = new ArrayList();
arr.insert(5);
arr.insert(3);
arr.insert(2);
arr.insert(6);
arr.insert(9);
arr.insert(8);
arr.insert(5);
arr.insert(1);
// arr.bubbleSort();

// console.log(arr.toString());



function createNonSortedArray(size){
  var array = new ArrayList();
  for(var i=size; i > 0; i--){
    array.insert(i);
  }

  return array;
}

var array = createNonSortedArray(5);
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());