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

  return { generateBoard };
};

export default Board;
