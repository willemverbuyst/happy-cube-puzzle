import {
  PIECE_COLUMNS,
  PIECE_ROWS,
  PUZZLE_COLUMNS,
  PUZZLE_ROWS,
} from "../../config/general";
import { ORANGE_COLOR, ORANGE_FRAME, ORANGE_PIECES } from "../../config/orange";
import { nestedArrayToUint8 } from "../../utils/toUint8";
import Piece from "../Piece";
import { Puzzle } from "../Puzzle";

export function OrangePuzzle() {
  return (
    <>
      <Puzzle
        color={ORANGE_COLOR}
        frame={nestedArrayToUint8({
          pattern: ORANGE_FRAME,
          rows: PUZZLE_ROWS,
          columns: PUZZLE_COLUMNS,
        })}
      />
      <div className="flex gap-14">
        {ORANGE_PIECES.map((piece, index) => (
          <Piece
            key={index}
            color={ORANGE_COLOR}
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
