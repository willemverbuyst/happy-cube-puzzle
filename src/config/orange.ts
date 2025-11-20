import type { Color, Grid, Piece } from "../types";

export const ORANGE_COLOR: Color = "bg-orange-400";
export const ORANGE_FRAME: Grid<11, 15> = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
] as const;
export const ORANGE_PIECE_1: Piece<5, 5> = [
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
] as const;
export const ORANGE_PIECE_2: Piece<5, 5> = [
  [0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 0, 1, 0],
] as const;
export const ORANGE_PIECE_3: Piece<5, 5> = [
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
] as const;
export const ORANGE_PIECE_4: Piece<5, 5> = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
] as const;
export const ORANGE_PIECE_5: Piece<5, 5> = [
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
] as const;
export const ORANGE_PIECE_6: Piece<5, 5> = [
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 0, 1, 1],
] as const;
export const ORANGE_PIECES: Piece<5, 5>[] = [
  ORANGE_PIECE_1,
  ORANGE_PIECE_2,
  ORANGE_PIECE_3,
  ORANGE_PIECE_4,
  ORANGE_PIECE_5,
  ORANGE_PIECE_6,
] as const;
