class Graph {
  constructor() {
    this.vertices = []; // {1}
    this.adjList = new Map(); // {2}
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []); // {4}
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w); // {5}
    this.adjList.get(w).push(v); // {6}
  }

  showMap() {
    console.log(this.adjList);
  }

  toString() {
    var s = '';
    for (var i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + ' -> ';
      var neighbors = this.adjList.get(this.vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }

      s += '\n';
    }
    return s;
  }


  /*
    1. 큐를 생성한다
    2. v를 '방문했음'(회색)으로 표시하고 Q에 v를 추가한다.
    3. Q는 비어 있지 않으므로 다음 과정을 밟는다.
    3-1 u를 Q에서 삭제한다.
    3-2 u를 방문했음(회색)으로 표시한다.
    3-3 u의 '방문하지 않은'(흰색) 모든 입접 정점을 q에 넣는다.
    3-4 u를 탐색했음(흑색) 으로 표시한다
  */

  initialzeColor() {
    var color = [];
    for (var i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = 'white';
    }

    return color;
  }

  bfs(v, callback) {
    var color = this.initialzeColor(), queue = [];
    queue.push(v);

    while (queue.length !== 0) {
      var u = queue.shift();
      var neighbors = this.adjList.get(u);
      color[u] = 'grey';

      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.push(w);
        }
      }

      color[u] = 'black';
      if (callback) {
        callback(u);
      }


      // console.log(color, neighbors);
    }
  }

  printNode(value) {
    console.log('탐색한 정점' + value);
  }

}

let graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'] // {7}
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

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

graph.bfs(myVertices[0], graph.printNode);

// graph.showMap();
// console.log(graph.toString());