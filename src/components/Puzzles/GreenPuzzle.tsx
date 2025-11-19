import { GREEN_COLOR, GREEN_FRAME, GREEN_PIECES } from "../../config/green";
import { pieceToUint8, puzzleToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function GreenPuzzle() {
  return (
    <>
      <Puzzle color={GREEN_COLOR} frame={puzzleToUint8(GREEN_FRAME)} />
      <div className="flex gap-14">
        {GREEN_PIECES.map((piece, index) => (
          <Piece key={index} color={GREEN_COLOR} piece={pieceToUint8(piece)} />
        ))}
      </div>
    </>
  );
}
