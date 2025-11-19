import clsx from "clsx";
import type { PuzzleConfig } from "../types";
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
            "--rows": puzzleConfig.puzzleRows,
            "--cols": puzzleConfig.puzzleColumns,
            display: "grid",
            gridTemplateRows: "repeat(var(--rows), 20px)",
            gridTemplateColumns: "repeat(var(--cols), 20px)",
          } as React.CSSProperties
        }
      >
        {Array.from({ length: puzzleConfig.puzzleRows }).map((_, r) =>
          Array.from({ length: puzzleConfig.puzzleColumns }).map((_, c) => {
            const i = r * puzzleConfig.puzzleColumns + c;
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
            key={`${puzzleConfig.color}-${index}`}
            color={puzzleConfig.color}
            piece={nestedArrayToUint8({
              pattern: piece,
              rows: puzzleConfig.pieceRows,
              columns: puzzleConfig.pieceColumns,
            })}
            rows={puzzleConfig.pieceRows}
            columns={puzzleConfig.pieceColumns}
          />
        ))}
      </div>
    </>
  );
}
