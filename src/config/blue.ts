import type {
  Color,
  Column15,
  Column5,
  Grid,
  Piece,
  Row11,
  Row5,
} from "../types";

export const BLUE_COLOR: Color = "bg-blue-400";
export const BLUE_FRAME: Grid<Row11, Column15> = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
] as const;
export const BLUE_PIECE_1: Piece<Row5, Column5> = [
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
] as const;
export const BLUE_PIECE_2: Piece<Row5, Column5> = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 1],
] as const;
export const BLUE_PIECE_3: Piece<Row5, Column5> = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
] as const;
export const BLUE_PIECE_4: Piece<Row5, Column5> = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const BLUE_PIECE_5: Piece<Row5, Column5> = [
  [0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
] as const;
export const BLUE_PIECE_6: Piece<Row5, Column5> = [
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 0],
] as const;
export const BLUE_PIECES: Piece<Row5, Column5>[] = [
  BLUE_PIECE_1,
  BLUE_PIECE_2,
  BLUE_PIECE_3,
  BLUE_PIECE_4,
  BLUE_PIECE_5,
  BLUE_PIECE_6,
] as const;
