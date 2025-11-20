export function rotateRight({
  arr,
  rows,
  columns,
}: {
  arr: Uint8Array;
  rows: number;
  columns: number;
}) {
  const out = new Uint8Array(rows * columns);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const oldIndex = (columns - c - 1) * columns + r;
      const newIndex = r * columns + c;
      out[newIndex] = arr[oldIndex];
    }
  }

  return out;
}

export function rotateLeft({
  arr,
  rows,
  columns,
}: {
  arr: Uint8Array;
  rows: number;
  columns: number;
}) {
  const out = new Uint8Array(rows * columns);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const oldIndex = c * columns + (columns - r - 1);
      out[r * columns + c] = arr[oldIndex];
    }
  }
  return out;
}

export function flipHorizontal({
  arr,
  rows,
  columns,
}: {
  arr: Uint8Array;
  rows: number;
  columns: number;
}) {
  const out = new Uint8Array(rows * columns);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const oldIndex = r * columns + (columns - c - 1);
      out[r * columns + c] = arr[oldIndex];
    }
  }
  return out;
}

export function flipVertical({
  arr,
  rows,
  columns,
}: {
  arr: Uint8Array;
  rows: number;
  columns: number;
}) {
  const out = new Uint8Array(rows * columns);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const oldIndex = (rows - r - 1) * columns + c;
      out[r * columns + c] = arr[oldIndex];
    }
  }
  return out;
}
