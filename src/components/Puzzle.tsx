import clsx from "clsx";
import { PUZZLE_COLUMNS, PUZZLE_ROWS } from "../config/general";

export function Puzzle({
  color,
  frame,
}: {
  color: string;
  frame: Uint8Array<ArrayBuffer>;
}) {
  return (
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
              className={clsx("w-5 h-5", frame[i] ? color : "bg-gray-200")}
            />
          );
        }),
      )}
    </div>
  );
}
