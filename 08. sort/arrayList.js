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

  quickSort() {
    this.quick(this.array, 0, this.array.length-1);
  }

  quick(arr, left, right) {
    var index; // {1}
  
    if(arr.length > 1) { // {2} // 빈 배열일 경우 return;
      index = this.partition(arr, left, right); // {3}

      if(left < index -1) { // {4}
        this.quick(arr, left, index-1); // {5}
      }

      if(index < right) { // {6}
        this.quick(arr, left, right); // {7}
      }
      
    }
  }


  partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)], // {8}
    i = left, 
    j = right;

    while(i <= j) {
      while(array[i] < pivot) {
        i++;
      }

      while(array[j] > pivot) {
        j--;
      }

      if(i <= j) {
        this.swapQuickSort(array, i, j); // {15}
        i++;
        j--;
      }
    }

    return i;
  }

  swapQuickSort(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
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

function createNonSortedArray(size){
  var array = new ArrayList();
  for(var i=size; i > 0; i--){
    array.insert(i);
  }

  return array;
}

var array = createNonSortedArray(5);
// array.quickSort();
// console.log(array.toString());
// array.bubbleSort();
// console.log(array.toString());