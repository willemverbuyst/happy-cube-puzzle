import type { COLORS } from "./config/puzzles";

export type ColorType = (typeof COLORS)[number];
export type PuzzleConfig = {
  color: string;
  frame: Grid<number, number>;
  pieces: Piece<number, number>[];
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
