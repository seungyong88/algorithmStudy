class Stack{
  constructor(){
    this.data=[];
  }
  push(ele){
    this.data.push(ele)
  }
  pop(){
    return this.data.pop()
  }
  peek(){
    return this.data[this.data.length-1]
  }
  isEmpty(){
    return this.data.length == 0
  }
  size(){
    return this.data.length
  }
  clear(){
    this.data = [];
  }
  print(){
    console.log(this.data.toString())
  }
}