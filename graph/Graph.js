class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  printGraph() { 
    var get_keys = this.adjList.keys(); 
    for (var i of get_keys) { 
      var get_values = this.adjList.get(i); 
      var conc = ""; 

      for (var j of get_values) 
          conc += j + " "; 
      console.log(i + " -> " + conc); 
    } 
  } 

  bfs(start) {
    let visited = [];
    for(let i=0; i<this.noOfVertices; i++) {
      visited[i] = false;
    }

    let queue = [];
    visited[start] = true;
    queue.push(start);
    while(queue.length !== 0) {
      let getQueuedElement = queue.shift();
      console.log('Queued: ', getQueuedElement);
      let getList = this.adjList.get(getQueuedElement);
      for(let i in getList) {
        let negh = getList[i];
        if(!visited[negh]) {
          visited[negh] = true;
          queue.push(negh);
        }
      }
    }
  }
}

var g = new Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 
// g.printGraph(); 

g.bfs('A');
