import type { Color, Grid, Piece } from "../types";

export const RED_COLOR: Color = "bg-red-400";
export const RED_FRAME: Grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
] as const;
export const RED_PIECE_1: Piece = [
  [0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
] as const;
export const RED_PIECE_2: Piece = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const RED_PIECE_3: Piece = [
  [0, 1, 0, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
] as const;
export const RED_PIECE_4: Piece = [
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 1, 1],
] as const;
export const RED_PIECE_5: Piece = [
  [1, 0, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 0, 1],
] as const;
export const RED_PIECE_6: Piece = [
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const RED_PIECES = [
  RED_PIECE_1,
  RED_PIECE_2,
  RED_PIECE_3,
  RED_PIECE_4,
  RED_PIECE_5,
  RED_PIECE_6,
] as const;
