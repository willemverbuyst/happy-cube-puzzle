import { BLUE_COLOR, BLUE_FRAME, BLUE_PIECES } from "../../config/blue";
import {
  PIECE_COLUMNS,
  PIECE_ROWS,
  PUZZLE_COLUMNS,
  PUZZLE_ROWS,
} from "../../config/general";
import { nestedArrayToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function BluePuzzle() {
  return (
    <>
      <Puzzle
        color={BLUE_COLOR}
        frame={nestedArrayToUint8({
          pattern: BLUE_FRAME,
          rows: PUZZLE_ROWS,
          columns: PUZZLE_COLUMNS,
        })}
      />
      <div className="flex gap-14">
        {BLUE_PIECES.map((piece, index) => (
          <Piece
            key={index}
            color={BLUE_COLOR}
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
