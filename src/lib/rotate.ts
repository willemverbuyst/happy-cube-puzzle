export function rotateRight(arr: Uint8Array) {
  const out = new Uint8Array(25);

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const oldIndex = (5 - c - 1) * 5 + r;
      const newIndex = r * 5 + c;
      out[newIndex] = arr[oldIndex];
    }
  }

  return out;
}

export function rotateLeft(arr: Uint8Array) {
  const out = new Uint8Array(25);

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const oldIndex = c * 5 + (5 - r - 1);
      out[r * 5 + c] = arr[oldIndex];
    }
  }
  return out;
}

export function flipHorizontal(arr: Uint8Array) {
  const out = new Uint8Array(25);

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const oldIndex = r * 5 + (5 - c - 1);
      out[r * 5 + c] = arr[oldIndex];
    }
  }
  return out;
}

export function flipVertical(arr: Uint8Array) {
  const out = new Uint8Array(25);

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const oldIndex = (5 - r - 1) * 5 + c;
      out[r * 5 + c] = arr[oldIndex];
    }
  }
  return out;
}
