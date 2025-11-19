import {
  PIECE_COLUMNS,
  PIECE_ROWS,
  PUZZLE_COLUMNS,
  PUZZLE_ROWS,
} from "../../config/general";
import { GREEN_COLOR, GREEN_FRAME, GREEN_PIECES } from "../../config/green";
import { nestedArrayToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function GreenPuzzle() {
  return (
    <>
      <Puzzle
        color={GREEN_COLOR}
        frame={nestedArrayToUint8({
          pattern: GREEN_FRAME,
          rows: PUZZLE_ROWS,
          columns: PUZZLE_COLUMNS,
        })}
      />
      <div className="flex gap-14">
        {GREEN_PIECES.map((piece, index) => (
          <Piece
            key={index}
            color={GREEN_COLOR}
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
