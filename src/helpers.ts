import { COLS, PIECE_SIZE, ROWS } from "./config/general";
import type { Grid, Piece } from "./types";

export function gridToUint8(pattern: Grid) {
  const out = new Uint8Array(ROWS * COLS);

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      out[r * COLS + c] = pattern[r][c];
    }
  }
  return out;
}

export function pieceToUint8(pattern: Piece) {
  const out = new Uint8Array(PIECE_SIZE * PIECE_SIZE);

  for (let r = 0; r < PIECE_SIZE; r++) {
    for (let c = 0; c < PIECE_SIZE; c++) {
      out[r * PIECE_SIZE + c] = pattern[r][c];
    }
  }
  return out;
}

export function rotateRight(grid: Uint8Array) {
  const out = new Uint8Array(25);

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const oldIndex = (5 - c - 1) * 5 + r;
      const newIndex = r * 5 + c;
      out[newIndex] = grid[oldIndex];
    }
  }

  return out;
}

export function rotateLeft(grid: Uint8Array) {
  const out = new Uint8Array(25);

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const oldIndex = c * 5 + (5 - r - 1);
      out[r * 5 + c] = grid[oldIndex];
    }
  }
  return out;
}
