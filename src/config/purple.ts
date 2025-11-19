import type {
  Color,
  Column15,
  Column5,
  Grid,
  Piece,
  Row11,
  Row5,
} from "../types";

export const PURPLE_COLOR: Color = "bg-purple-400";
export const PURPLE_FRAME: Grid<Row11, Column15> = [
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
export const PURPLE_PIECE_1: Piece<Row5, Column5> = [
  [0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
] as const;
export const PURPLE_PIECE_2: Piece<Row5, Column5> = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const PURPLE_PIECE_3: Piece<Row5, Column5> = [
  [0, 1, 0, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
] as const;
export const PURPLE_PIECE_4: Piece<Row5, Column5> = [
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 1, 1],
] as const;
export const PURPLE_PIECE_5: Piece<Row5, Column5> = [
  [1, 0, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 0, 1],
] as const;
export const PURPLE_PIECE_6: Piece<Row5, Column5> = [
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const PURPLE_PIECES: Piece<5, 5>[] = [
  PURPLE_PIECE_1,
  PURPLE_PIECE_2,
  PURPLE_PIECE_3,
  PURPLE_PIECE_4,
  PURPLE_PIECE_5,
  PURPLE_PIECE_6,
] as const;
