import { ORANGE_COLOR, ORANGE_FRAME, ORANGE_PIECES } from "../../config/orange";
import { pieceToUint8, puzzleToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function OrangePuzzle() {
  return (
    <>
      <Puzzle color={ORANGE_COLOR} frame={puzzleToUint8(ORANGE_FRAME)} />
      <div className="flex gap-14">
        {ORANGE_PIECES.map((piece, index) => (
          <Piece key={index} color={ORANGE_COLOR} piece={pieceToUint8(piece)} />
        ))}
      </div>
    </>
  );
}
