import type {
  COLORS,
  COLUMNS_15,
  COLUMNS_5,
  ROWS_11,
  ROWS_5,
} from "./config/general";

export type Row5 = typeof ROWS_5;
export type Row11 = typeof ROWS_11;
export type Column5 = typeof COLUMNS_5;
export type Column15 = typeof COLUMNS_15;
export type ColorType = (typeof COLORS)[number];
export type PuzzleConfig = {
  color: string;
  frame: Grid<number, number>;
  pieces: Piece<number, number>[];
  puzzleRows: number;
  puzzleColumns: number;
  pieceRows: number;
  pieceColumns: number;
};

type Cell = 0 | 1;
type FixedArray<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _FixedArray<T, N, []>
  : never;
type _FixedArray<
  T,
  N extends number,
  R extends unknown[],
> = R["length"] extends N ? R : _FixedArray<T, N, [T, ...R]>;

export type Grid<R extends number, C extends number> = FixedArray<
  FixedArray<Cell, C>,
  R
>;
export type Piece<R extends number, C extends number> = FixedArray<
  FixedArray<Cell, C>,
  R
>;

export type Color = `bg-${string}-400`;
export type ColorName =
  | "blue"
  | "green"
  | "orange"
  | "yellow"
  | "red"
  | "purple";
