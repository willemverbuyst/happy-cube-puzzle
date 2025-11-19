import { YELLOW_COLOR, YELLOW_FRAME, YELLOW_PIECES } from "../../config/yellow";
import { pieceToUint8, puzzleToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function YellowPuzzle() {
  return (
    <>
      <Puzzle color={YELLOW_COLOR} frame={puzzleToUint8(YELLOW_FRAME)} />
      <div className="flex gap-14">
        {YELLOW_PIECES.map((piece, index) => (
          <Piece key={index} color={YELLOW_COLOR} piece={pieceToUint8(piece)} />
        ))}
      </div>
    </>
  );
}
