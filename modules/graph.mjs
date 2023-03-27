const Graph = () => {
  const adjacencyList = new Map();

  const addVertex = (vertex) => {
    adjacencyList.set(vertex, []);
  };

  const addEdge = (leaves, enter) => {
    adjacencyList.get(leaves).push(enter);
  };

  return { adjacencyList, addVertex, addEdge };
};

export default Graph;
