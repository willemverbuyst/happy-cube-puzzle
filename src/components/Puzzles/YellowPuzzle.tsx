import {
  PIECE_COLUMNS,
  PIECE_ROWS,
  PUZZLE_COLUMNS,
  PUZZLE_ROWS,
} from "../../config/general";
import { YELLOW_COLOR, YELLOW_FRAME, YELLOW_PIECES } from "../../config/yellow";
import { nestedArrayToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function YellowPuzzle() {
  return (
    <>
      <Puzzle
        color={YELLOW_COLOR}
        frame={nestedArrayToUint8({
          pattern: YELLOW_FRAME,
          rows: PUZZLE_ROWS,
          columns: PUZZLE_COLUMNS,
        })}
      />
      <div className="flex gap-14">
        {YELLOW_PIECES.map((piece, index) => (
          <Piece
            key={index}
            color={YELLOW_COLOR}
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
