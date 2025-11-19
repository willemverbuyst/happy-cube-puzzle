import type {
  Color,
  Column15,
  Column5,
  Grid,
  Piece,
  Row11,
  Row5,
} from "../types";

export const ORANGE_COLOR: Color = "bg-orange-400";
export const ORANGE_FRAME: Grid<Row11, Column15> = [
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
export const ORANGE_PIECE_1: Piece<Row5, Column5> = [
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
] as const;
export const ORANGE_PIECE_2: Piece<Row5, Column5> = [
  [0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 0, 1, 0],
] as const;
export const ORANGE_PIECE_3: Piece<Row5, Column5> = [
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
] as const;
export const ORANGE_PIECE_4: Piece<Row5, Column5> = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
] as const;
export const ORANGE_PIECE_5: Piece<Row5, Column5> = [
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
] as const;
export const ORANGE_PIECE_6: Piece<Row5, Column5> = [
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
