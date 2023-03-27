import Graph from "./graph.mjs";

const Board = () => {
  const boardGraph = Graph();

  const setBoardSize = (boardSize) => {
    for (let i = 0; i < boardSize * boardSize; i++) {
      boardGraph.addVertex(i);
    }
  };

  return { setBoardSize };
};

export default Board;
