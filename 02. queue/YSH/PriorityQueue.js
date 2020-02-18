class PriorityQueue{
  constructor(){
    this.data = [];
  }
  enqueue(ele,pri){
    let newData = { element : ele, priority : pri } //새로운 놈 스펙
    if(this.isEmpty()){
      this.data.push(newData)
    } else {
      let added = false;
      for (let i = 0; i < this.data.length; i++){
        if(newData.priority < this.data[i].priority){ //우선순위가 좋으면 새치기
          this.data.splice(i,0,newData);
          added = true;
          break; //이놈떄문에 forEach는 안되나
        }
      }
      if(!added) this.data.push(newData) //우선순위 꼴찌
    }
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
    for (var i=0; i<this.data.length; i++){
      console.log(this.data[i].element + ' - ' + this.data[i].priority);
    }
  }
}