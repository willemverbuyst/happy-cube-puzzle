import type { Grid, Piece } from "../types";

export const PUZZLE_ROWS = 11;
export const PUZZLE_COLUMNS = 15;
export const PIECE_ROWS = 5;
export const PIECE_COLUMNS = 5;
export const COLORS = [
  "blue",
  "green",
  "orange",
  "yellow",
  "red",
  "purple",
] as const;
export type ColorType = (typeof COLORS)[number];
export type PuzzleConfig = {
  color: string;
  frame: Grid;
  pieces: Piece[];
  puzzleRows: number;
  puzzleColumns: number;
  pieceRows: number;
  pieceColumns: number;
};
