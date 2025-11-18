import { blueGrid, COLS, ROWS } from "./config";



export default function Grid() {
  



  return (
    <div style={{
      display: "grid",
      gridTemplateRows: `repeat(${ROWS}, 20px)`,
      gridTemplateColumns: `repeat(${COLS}, 20px)`,
    }}>
      {Array.from({ length: ROWS}).map((_, r) =>
        Array.from({ length: COLS }).map((_, c) => {
          const i = r * COLS + c;
          return (
            <div
              key={`${r}-${c}`}
              style={{
                width: 20,
                height: 20,
                background: blueGrid[i] ? "rgba(151, 180, 235, 1)" : "#eee",
              }}
            />
          );
        })
      )}
    </div>
  );
}
