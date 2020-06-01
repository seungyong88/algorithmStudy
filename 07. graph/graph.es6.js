class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  showMap() {
    console.log(this.adjList);
  }

  initialzeColor() {
    var color = [];
    for (var i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = 'white';
    }

    return color;
  }

  bfs(v) {
    var color = this.initialzeColor(),
      queue = [],
      d = [],
      pred = [];
    queue.push(v); // 처음에 검사할것은 처음에 바로 넣어준다.


    for (var i = 0; i < this.vertices.length; i++) {  // {3}
      d[this.vertices[i]] = 0;
      pred[this.vertices[i]] = null;
    }

    while (queue.length !== 0) { // queue를 지속적으로 수정 해줄거니 while로 돌린다.
      var u = queue.shift();
      var neigbors = this.adjList.get(u);
      color[u] = 'grey';

      for (var i = 0; i < neigbors.length; i++) {
        var w = neigbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          d[w] = d[u] + 1; // {6};
          pred[w] = u; // {7}
          queue.push(w);
        }
      }

      color[u] = 'black';
    }

    return {
      distances: d,
      predcessors: pred
    }
  }

  printNode(value) {
    console.log('탐색한 정점' + value);
  }
}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

// let fromVertex = myVertices[0];
// for (var i = 1; i < myVertices.length; i++) {
//   var toVertext = myVertices[i], path = [];
//   for (var v = toVertext v !== fromVertex; v=shift)
// }

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.bfs('A'));