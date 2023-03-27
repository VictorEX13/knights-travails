import Graph from "./graph.mjs";

const Board = () => {
  const boardGraph = Graph();

  const generateBoard = (boardSize) => {
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

  const setVertexEdges = (x, boardSize) => {
    const row = Math.floor(x / boardSize);
    const column = x % boardSize;

    for (const move of validMoves) {
      const targetRow = row + move[0];
      const targetColumn = column + move[1];
      if (
        isAValidSquare(targetRow, boardSize) &&
        isAValidSquare(targetColumn, boardSize)
      ) {
        const targetVertex = targetRow * boardSize + targetColumn;
        boardGraph.addEdge(x, targetVertex);
      }
    }
  };

  const isAValidSquare = (x, boardSize) => {
    return x >= 0 && x < boardSize;
  };

  return { generateBoard };
};

export default Board;
