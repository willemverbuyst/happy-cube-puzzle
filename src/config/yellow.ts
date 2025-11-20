import type { Color, Grid, Piece } from "../lib/types";

export const YELLOW_COLOR: Color = "bg-yellow-400";
export const YELLOW_FRAME: Grid<11, 15> = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
] as const;
export const YELLOW_PIECE_1: Piece<5, 5> = [
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 0, 1, 1],
] as const;
export const YELLOW_PIECE_2: Piece<5, 5> = [
  [0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const YELLOW_PIECE_3: Piece<5, 5> = [
  [0, 0, 1, 0, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0],
] as const;
export const YELLOW_PIECE_4: Piece<5, 5> = [
  [1, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
] as const;
export const YELLOW_PIECE_5: Piece<5, 5> = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
] as const;
export const YELLOW_PIECE_6: Piece<5, 5> = [
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 1],
] as const;
export const YELLOW_PIECES: Piece<5, 5>[] = [
  YELLOW_PIECE_1,
  YELLOW_PIECE_2,
  YELLOW_PIECE_3,
  YELLOW_PIECE_4,
  YELLOW_PIECE_5,
  YELLOW_PIECE_6,
] as const;
