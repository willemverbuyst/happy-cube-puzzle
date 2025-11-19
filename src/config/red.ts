import type {
  Color,
  Column15,
  Column5,
  Grid,
  Piece,
  Row11,
  Row5,
} from "../types";

export const RED_COLOR: Color = "bg-red-400";
export const RED_FRAME: Grid<Row11, Column15> = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
] as const;
export const RED_PIECE_1: Piece<Row5, Column5> = [
  [0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
] as const;
export const RED_PIECE_2: Piece<Row5, Column5> = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const RED_PIECE_3: Piece<Row5, Column5> = [
  [0, 1, 0, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
] as const;
export const RED_PIECE_4: Piece<Row5, Column5> = [
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 1, 1],
] as const;
export const RED_PIECE_5: Piece<Row5, Column5> = [
  [1, 0, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 0, 1],
] as const;
export const RED_PIECE_6: Piece<Row5, Column5> = [
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
] as const;
export const RED_PIECES: Piece<5, 5>[] = [
  RED_PIECE_1,
  RED_PIECE_2,
  RED_PIECE_3,
  RED_PIECE_4,
  RED_PIECE_5,
  RED_PIECE_6,
] as const;
