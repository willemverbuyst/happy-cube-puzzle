import clsx from "clsx";
import {
  PIECE_COLUMNS,
  PIECE_ROWS,
  PUZZLE_COLUMNS,
  PUZZLE_ROWS,
  type PuzzleConfig,
} from "../config/general";
import { nestedArrayToUint8 } from "../utils/toUint8";
import Piece from "./Piece";

export function Puzzle({ puzzleConfig }: { puzzleConfig: PuzzleConfig }) {
  const frame = nestedArrayToUint8({
    pattern: puzzleConfig.frame,
    rows: puzzleConfig.puzzleRows,
    columns: puzzleConfig.puzzleColumns,
  });

  return (
    <>
      <div
        style={
          {
            "--rows": PUZZLE_ROWS,
            "--cols": PUZZLE_COLUMNS,
            display: "grid",
            gridTemplateRows: "repeat(var(--rows), 20px)",
            gridTemplateColumns: "repeat(var(--cols), 20px)",
          } as React.CSSProperties
        }
      >
        {Array.from({ length: PUZZLE_ROWS }).map((_, r) =>
          Array.from({ length: PUZZLE_COLUMNS }).map((_, c) => {
            const i = r * PUZZLE_COLUMNS + c;
            return (
              <div
                key={`${r}-${c}`}
                className={clsx(
                  "w-5 h-5",
                  frame[i] ? puzzleConfig.color : "bg-gray-200",
                )}
              />
            );
          }),
        )}
      </div>
      <div className="flex gap-14">
        {puzzleConfig.pieces.map((piece, index) => (
          <Piece
            key={index}
            color={puzzleConfig.color}
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
