import { RED_COLOR, RED_FRAME, RED_PIECES } from "../../config/red";
import { pieceToUint8, puzzleToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function RedPuzzle() {
  return (
    <>
      <Puzzle color={RED_COLOR} frame={puzzleToUint8(RED_FRAME)} />
      <div className="flex gap-14">
        {RED_PIECES.map((piece, index) => (
          <Piece key={index} color={RED_COLOR} piece={pieceToUint8(piece)} />
        ))}
      </div>
    </>
  );
}
