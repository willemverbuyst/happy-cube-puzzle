import {
  PIECE_COLUMNS,
  PIECE_ROWS,
  PUZZLE_COLUMNS,
  PUZZLE_ROWS,
} from "../../config/general";
import { PURPLE_COLOR, PURPLE_FRAME, PURPLE_PIECES } from "../../config/purple";
import { nestedArrayToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function PurplePuzzle() {
  return (
    <>
      <Puzzle
        color={PURPLE_COLOR}
        frame={nestedArrayToUint8({
          pattern: PURPLE_FRAME,
          rows: PUZZLE_ROWS,
          columns: PUZZLE_COLUMNS,
        })}
      />
      <div className="flex gap-14">
        {PURPLE_PIECES.map((piece, index) => (
          <Piece
            key={index}
            color={PURPLE_COLOR}
            piece={nestedArrayToUint8({
              pattern: piece,
              rows: PIECE_ROWS,
              columns: PIECE_COLUMNS,
            })}
          />
        ))}
      </div>
    </>
  );
}
