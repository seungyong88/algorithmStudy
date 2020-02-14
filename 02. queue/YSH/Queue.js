class Queue{
  constructor(){
    this.data = [];
  }
  enqueue(ele){
    this.data.push(ele)
  }
  dequeue(){
    return this.data.shift()
  }
  front(){
    return this.data[0]
  }
  isEmpty(){
    return this.data.length == 0
  }
  clear(){
    this.data = []
  }
  size(){
    return this.data.length
  }
  print(){
    console.log(this.data.toString())
  }
}