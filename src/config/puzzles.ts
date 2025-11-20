import type { ColorType, PuzzleConfig } from "../types";
import { BLUE_COLOR, BLUE_FRAME, BLUE_PIECES } from "./blue";
import { GREEN_COLOR, GREEN_FRAME, GREEN_PIECES } from "./green";
import { ORANGE_COLOR, ORANGE_FRAME, ORANGE_PIECES } from "./orange";
import { PURPLE_COLOR, PURPLE_FRAME, PURPLE_PIECES } from "./purple";
import { RED_COLOR, RED_FRAME, RED_PIECES } from "./red";
import { YELLOW_COLOR, YELLOW_FRAME, YELLOW_PIECES } from "./yellow";

export const COLORS = [
  "blue",
  "green",
  "orange",
  "yellow",
  "red",
  "purple",
] as const;

export const PUZZLES: Record<ColorType, PuzzleConfig> = {
  blue: {
    color: BLUE_COLOR,
    frame: BLUE_FRAME,
    pieces: BLUE_PIECES,
  },
  green: {
    color: GREEN_COLOR,
    frame: GREEN_FRAME,
    pieces: GREEN_PIECES,
  },
  orange: {
    color: ORANGE_COLOR,
    frame: ORANGE_FRAME,
    pieces: ORANGE_PIECES,
  },
  yellow: {
    color: YELLOW_COLOR,
    frame: YELLOW_FRAME,
    pieces: YELLOW_PIECES,
  },
  red: {
    color: RED_COLOR,
    frame: RED_FRAME,
    pieces: RED_PIECES,
  },
  purple: {
    color: PURPLE_COLOR,
    frame: PURPLE_FRAME,
    pieces: PURPLE_PIECES,
  },
};
