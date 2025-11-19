import type {
  Color,
  Column15,
  Column5,
  Grid,
  Piece,
  Row11,
  Row5,
} from "../types";

export const YELLOW_COLOR: Color = "bg-yellow-400";
export const YELLOW_FRAME: Grid<Row11, Column15> = [
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
export const YELLOW_PIECE_1: Piece<Row5, Column5> = [
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 0, 1, 1],
] as const;
export const YELLOW_PIECE_2: Piece<Row5, Column5> = [
  [0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const YELLOW_PIECE_3: Piece<Row5, Column5> = [
  [0, 0, 1, 0, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0],
] as const;
export const YELLOW_PIECE_4: Piece<Row5, Column5> = [
  [1, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
] as const;
export const YELLOW_PIECE_5: Piece<Row5, Column5> = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
] as const;
export const YELLOW_PIECE_6: Piece<Row5, Column5> = [
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
