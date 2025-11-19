import type { Color, Grid, Piece } from "../types";

export const PURPLE_COLOR: Color = "bg-purple-400";
export const PURPLE_FRAME: Grid = [
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
export const PURPLE_PIECE_1: Piece = [
  [0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
] as const;
export const PURPLE_PIECE_2: Piece = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const PURPLE_PIECE_3: Piece = [
  [0, 1, 0, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
] as const;
export const PURPLE_PIECE_4: Piece = [
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 1, 1],
] as const;
export const PURPLE_PIECE_5: Piece = [
  [1, 0, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 0, 1],
] as const;
export const PURPLE_PIECE_6: Piece = [
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const PURPLE_PIECES: Piece[] = [
  PURPLE_PIECE_1,
  PURPLE_PIECE_2,
  PURPLE_PIECE_3,
  PURPLE_PIECE_4,
  PURPLE_PIECE_5,
  PURPLE_PIECE_6,
] as const;
