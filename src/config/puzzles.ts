import type { ColorType, PuzzleConfig } from "../types";
import { BLUE_COLOR, BLUE_FRAME, BLUE_PIECES } from "./blue";
import { COLUMNS_15, COLUMNS_5, ROWS_11, ROWS_5 } from "./general";
import { GREEN_COLOR, GREEN_FRAME, GREEN_PIECES } from "./green";
import { ORANGE_COLOR, ORANGE_FRAME, ORANGE_PIECES } from "./orange";
import { PURPLE_COLOR, PURPLE_FRAME, PURPLE_PIECES } from "./purple";
import { RED_COLOR, RED_FRAME, RED_PIECES } from "./red";
import { YELLOW_COLOR, YELLOW_FRAME, YELLOW_PIECES } from "./yellow";

export const PUZZLES: Record<ColorType, PuzzleConfig> = {
  blue: {
    color: BLUE_COLOR,
    frame: BLUE_FRAME,
    pieces: BLUE_PIECES,
    puzzleRows: ROWS_11,
    puzzleColumns: COLUMNS_15,
    pieceRows: ROWS_5,
    pieceColumns: COLUMNS_5,
  },
  green: {
    color: GREEN_COLOR,
    frame: GREEN_FRAME,
    pieces: GREEN_PIECES,
    puzzleRows: ROWS_11,
    puzzleColumns: COLUMNS_15,
    pieceRows: ROWS_5,
    pieceColumns: COLUMNS_5,
  },
  orange: {
    color: ORANGE_COLOR,
    frame: ORANGE_FRAME,
    pieces: ORANGE_PIECES,
    puzzleRows: ROWS_11,
    puzzleColumns: COLUMNS_15,
    pieceRows: ROWS_5,
    pieceColumns: COLUMNS_5,
  },
  yellow: {
    color: YELLOW_COLOR,
    frame: YELLOW_FRAME,
    pieces: YELLOW_PIECES,
    puzzleRows: ROWS_11,
    puzzleColumns: COLUMNS_15,
    pieceRows: ROWS_5,
    pieceColumns: COLUMNS_5,
  },
  red: {
    color: RED_COLOR,
    frame: RED_FRAME,
    pieces: RED_PIECES,
    puzzleRows: ROWS_11,
    puzzleColumns: COLUMNS_15,
    pieceRows: ROWS_5,
    pieceColumns: COLUMNS_5,
  },
  purple: {
    color: PURPLE_COLOR,
    frame: PURPLE_FRAME,
    pieces: PURPLE_PIECES,
    puzzleRows: ROWS_11,
    puzzleColumns: COLUMNS_15,
    pieceRows: ROWS_5,
    pieceColumns: COLUMNS_5,
  },
};
