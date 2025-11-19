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

export type Grid = FixedArray<FixedArray<Cell, 15>, 11>;
export type Piece = FixedArray<FixedArray<Cell, 5>, 5>;

export type Color = `bg-${string}-400`;
