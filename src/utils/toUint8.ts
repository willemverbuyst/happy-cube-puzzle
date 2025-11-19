import { COLS, PIECE_SIZE, ROWS } from "../config/general";
import type { Grid, Piece } from "../types";

export function puzzleToUint8(pattern: Grid) {
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
