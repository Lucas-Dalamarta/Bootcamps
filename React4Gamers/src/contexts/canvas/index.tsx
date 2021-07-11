import React from "react";
import { canvas, handleNextMovement, checkValidMovement, ECanvas } from "./helpers";

interface IProps {
  children: React.ReactNode;
}

export const CanvasContext = React.createContext({
  canvas: [],
  updateCanvas: (direction, currentPosition, walker) => null
});

export default function CanvasProvider(props: IProps) {
  const [canvasState, updateCanvasState] = React.useState({
    canvas: canvas,
    updateCanvas: (direction, currentPosition, walker) => {
      const nextMovement = handleNextMovement(direction, currentPosition);
      const nextMove = checkValidMovement(nextMovement, walker);

      if (nextMove.valid) {
        updateCanvasState((prevState) => {
          const newCanvas = [...prevState.canvas];
          const currentValue = newCanvas[currentPosition.y][currentPosition.x];

          newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;
          newCanvas[nextMovement.y][nextMovement.x] = currentValue;

          return {
            canvas: newCanvas,
            updateCanvas: prevState.updateCanvas,
          }
        });
      }

      return {
        nextMovement,
        nextMove
      }
    }
  })

  return (
    <CanvasContext.Provider value={canvasState}>
        {props.children}
    </CanvasContext.Provider>
  )
}