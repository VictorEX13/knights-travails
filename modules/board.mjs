import Graph from "./graph.mjs";

const Board = () => {
  const boardGraph = Graph();

  const setBoardSize = (boardSize) => {
    boardGraph.clear();
    for (let i = 0; i < boardSize ** 2; i++) {
      boardGraph.addVertex(i);
    }
  };

  const isValidSquare = (x, boardSize) => {
    return x >= 0 && x < boardSize;
  };

  return { setBoardSize };
};

export default Board;
