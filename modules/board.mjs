import Graph from "./graph.mjs";

const Board = () => {
  const boardGraph = Graph();

  let currentBoardSize = 0;

  const generateBoard = (boardSize) => {
    currentBoardSize = boardSize;
    boardGraph.adjacencyList.clear();
    for (let i = 0; i < boardSize ** 2; i++) {
      boardGraph.addVertex(i);
    }
    for (let i = 0; i < boardSize ** 2; i++) {
      setVertexEdges(i, boardSize);
    }
  };

  const validMoves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const setVertexEdges = (x) => {
    const row = Math.floor(x / currentBoardSize);
    const column = x % currentBoardSize;

    for (const move of validMoves) {
      const targetRow = row + move[0];
      const targetColumn = column + move[1];
      if (isAValidSquare(targetRow) && isAValidSquare(targetColumn)) {
        const targetVertex = coordinateToVertex(targetRow, targetColumn);
        boardGraph.addEdge(x, targetVertex);
      }
    }
  };

  const isAValidSquare = (x) => {
    return x >= 0 && x < currentBoardSize;
  };

  const coordinateToVertex = (row, column) => {
    return row * currentBoardSize + column;
  };

  const vertexToCoordinate = (vertex) => {
    return `[${Math.floor(vertex / currentBoardSize)},${
      vertex % currentBoardSize
    }]`;
  };

  const knightMoves = (src, dest) => {
    const srcVertex = coordinateToVertex(src[0], src[1]);
    const destVertex = coordinateToVertex(dest[0], dest[1]);
    const path = [];
    const queue = [];
    let adj = boardGraph.adjacencyList;
    let visited, distance, predecessor;

    visited = new Array(adj.size);
    distance = new Array(adj.size);
    predecessor = new Array(adj.size);

    for (let i = 0; i < adj.size; i++) {
      visited[i] = false;
      distance[i] = Number.MAX_VALUE;
      predecessor[i] = -1;
    }

    visited[srcVertex] = true;
    distance[srcVertex] = 0;
    queue.push(srcVertex);

    while (queue.length > 0) {
      let curr = queue[0];
      for (let i = 0; i < adj.get(curr).length; i++) {
        if (!visited[adj.get(curr)[i]]) {
          visited[adj.get(curr)[i]] = true;
          distance[adj.get(curr)[i]] = distance[curr] + 1;
          predecessor[adj.get(curr)[i]] = curr;
          queue.push(adj.get(curr)[i]);

          if (adj.get(curr)[i] === destVertex) {
            break;
          }
        }
      }
      queue.shift();
    }

    let currentVertex = destVertex;
    path.push(currentVertex);

    while (predecessor[currentVertex] !== -1) {
      path.push(predecessor[currentVertex]);
      currentVertex = predecessor[currentVertex];
    }

    console.log(
      `You made it in ${distance[destVertex]} move${
        distance[destVertex] > 1 ? "s" : ""
      }!  Here's your path:`
    );

    for (let i = path.length - 1; i >= 0; i--) {
      console.log(vertexToCoordinate(path[i]));
    }
  };

  return { generateBoard, knightMoves };
};

export default Board;
