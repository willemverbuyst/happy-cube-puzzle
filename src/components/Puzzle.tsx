import clsx from "clsx";
import { useMemo } from "react";
import { shuffleArray } from "../lib/shuffle";
import { nestedArrayToUint8 } from "../lib/toUint8";
import type { PuzzleConfig } from "../types";
import Piece from "./Piece";

export function Puzzle({ puzzleConfig }: { puzzleConfig: PuzzleConfig }) {
  const shuffledPieces = useMemo(
    () => shuffleArray(puzzleConfig.pieces),
    [puzzleConfig.pieces],
  );

  const frameAsUint8Array = nestedArrayToUint8({
    pattern: puzzleConfig.frame,
    rows: puzzleConfig.frame.length,
    columns: puzzleConfig.frame[0].length,
  });

  return (
    <div className="flex flex-col items-center gap-14">
      <div
        style={
          {
            "--rows": puzzleConfig.frame.length,
            "--cols": puzzleConfig.frame[0].length,
            display: "grid",
            gridTemplateRows: "repeat(var(--rows), 20px)",
            gridTemplateColumns: "repeat(var(--cols), 20px)",
          } as React.CSSProperties
        }
      >
        {Array.from({ length: puzzleConfig.frame.length }).map((_, r) =>
          Array.from({ length: puzzleConfig.frame[0].length }).map((_, c) => {
            const i = r * puzzleConfig.frame[0].length + c;
            return (
              <div
                key={`${r}-${c}`}
                className={clsx(
                  "w-5 h-5",
                  frameAsUint8Array[i] ? puzzleConfig.color : "bg-gray-200",
                )}
              />
            );
          }),
        )}
      </div>

      <div className="flex gap-2">
        {shuffledPieces.map((piece, index) => (
          <Piece
            key={`${puzzleConfig.color}-${index}`}
            color={puzzleConfig.color}
            piece={piece}
          />
        ))}
      </div>
    </div>
  );
}
