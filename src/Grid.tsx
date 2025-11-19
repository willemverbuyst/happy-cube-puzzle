import clsx from "clsx";
import { COLS, ROWS } from "./config/general";

export default function Grid({
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
          "--rows": ROWS,
          "--cols": COLS,
          display: "grid",
          gridTemplateRows: "repeat(var(--rows), 20px)",
          gridTemplateColumns: "repeat(var(--cols), 20px)",
        } as React.CSSProperties
      }
    >
      {Array.from({ length: ROWS }).map((_, r) =>
        Array.from({ length: COLS }).map((_, c) => {
          const i = r * COLS + c;
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
