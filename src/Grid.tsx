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
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${ROWS}, 20px)`,
        gridTemplateColumns: `repeat(${COLS}, 20px)`,
      }}
    >
      {Array.from({ length: ROWS }).map((_, r) =>
        Array.from({ length: COLS }).map((_, c) => {
          const i = r * COLS + c;
          return (
            <div
              key={`${r}-${c}`}
              style={{
                width: 20,
                height: 20,
                background: frame[i] ? color : "#eee",
              }}
            />
          );
        }),
      )}
    </div>
  );
}
