const Graph = () => {
  const adjacencyList = new Map();

  const addVertex = (vertex) => {
    adjacencyList.set(vertex, []);
  };

  const addEdge = (firstVertex, secondVertex) => {
    adjacencyList.get(firstVertex).push(secondVertex);
    adjacencyList.get(secondVertex).push(firstVertex);
  };

  return { adjacencyList, addVertex, addEdge };
};

export default Graph;
