import { PURPLE_COLOR, PURPLE_FRAME, PURPLE_PIECES } from "../../config/purple";
import { pieceToUint8, puzzleToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function PurplePuzzle() {
  return (
    <>
      <Puzzle color={PURPLE_COLOR} frame={puzzleToUint8(PURPLE_FRAME)} />
      <div className="flex gap-14">
        {PURPLE_PIECES.map((piece, index) => (
          <Piece key={index} color={PURPLE_COLOR} piece={pieceToUint8(piece)} />
        ))}
      </div>
    </>
  );
}
