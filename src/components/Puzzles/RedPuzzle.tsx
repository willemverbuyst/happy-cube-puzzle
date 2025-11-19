import {
  PIECE_COLUMNS,
  PIECE_ROWS,
  PUZZLE_COLUMNS,
  PUZZLE_ROWS,
} from "../../config/general";
import { RED_COLOR, RED_FRAME, RED_PIECES } from "../../config/red";
import { nestedArrayToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function RedPuzzle() {
  return (
    <>
      <Puzzle
        color={RED_COLOR}
        frame={nestedArrayToUint8({
          pattern: RED_FRAME,
          rows: PUZZLE_ROWS,
          columns: PUZZLE_COLUMNS,
        })}
      />
      <div className="flex gap-14">
        {RED_PIECES.map((piece, index) => (
          <Piece
            key={index}
            color={RED_COLOR}
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
