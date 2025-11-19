import { BLUE_COLOR, BLUE_FRAME, BLUE_PIECES } from "../../config/blue";
import { pieceToUint8, puzzleToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function BluePuzzle() {
  return (
    <>
      <Puzzle color={BLUE_COLOR} frame={puzzleToUint8(BLUE_FRAME)} />
      <div className="flex gap-14">
        {BLUE_PIECES.map((piece, index) => (
          <Piece key={index} color={BLUE_COLOR} piece={pieceToUint8(piece)} />
        ))}
      </div>
    </>
  );
}
