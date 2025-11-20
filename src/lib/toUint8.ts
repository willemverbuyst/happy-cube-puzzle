export function nestedArrayToUint8({
  pattern,
  rows,
  columns,
}: {
  pattern: number[][];
  rows: number;
  columns: number;
}) {
  const out = new Uint8Array(rows * columns);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      out[r * columns + c] = pattern[r][c];
    }
  }
  return out;
}
