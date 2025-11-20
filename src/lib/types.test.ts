import { describe, expectTypeOf, it } from "vitest";
import type { Color, ColorName, Grid, Piece } from "./types";

describe("Type Tests", () => {
  describe("Grid type", () => {
    it("should accept a valid 11x15 grid structure", () => {
      const validGrid: Grid<11, 15> = [
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      ];

      expectTypeOf(validGrid).toEqualTypeOf<Grid<11, 15>>();
      expectTypeOf(validGrid).not.toBeString();
      expectTypeOf(validGrid).not.toBeNumber();
    });

    it("should be a 2D array structure", () => {
      expectTypeOf<Grid<11, 15>>().toExtend<(0 | 1)[][]>();
    });

    it("should only contain Cell values (0 or 1)", () => {
      type GridCell = Grid<5, 5>[number][number];
      expectTypeOf<GridCell>().toEqualTypeOf<0 | 1>();
    });
  });

  describe("Piece type", () => {
    it("should accept a valid 5x5 piece structure", () => {
      const validPiece: Piece<5, 5> = [
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
      ];

      expectTypeOf(validPiece).toEqualTypeOf<Piece<5, 5>>();
      expectTypeOf(validPiece).not.toBeString();
      expectTypeOf(validPiece).not.toBeNumber();
    });

    it("should be a 2D array structure", () => {
      expectTypeOf<Piece<5, 5>>().toExtend<(0 | 1)[][]>();
    });

    it("should only contain Cell values (0 or 1)", () => {
      type PieceCell = Piece<5, 5>[number][number];
      expectTypeOf<PieceCell>().toEqualTypeOf<0 | 1>();
    });

    it("should work with different dimensions", () => {
      const piece3x3: Piece<3, 3> = [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ];

      expectTypeOf(piece3x3).toEqualTypeOf<Piece<3, 3>>();
    });
  });

  describe("Color type", () => {
    it("should accept valid Tailwind color classes", () => {
      const blueColor: Color = "bg-blue-400";
      const redColor: Color = "bg-red-400";
      const customColor: Color = "bg-custom-400";

      expectTypeOf(blueColor).toEqualTypeOf<Color>();
      expectTypeOf(redColor).toEqualTypeOf<Color>();
      expectTypeOf(customColor).toEqualTypeOf<Color>();
    });

    it("should be a string type", () => {
      expectTypeOf<Color>().toBeString();
    });

    it("should match the pattern bg-*-400", () => {
      expectTypeOf<"bg-blue-400">().toExtend<Color>();
      expectTypeOf<"bg-anything-400">().toExtend<Color>();
    });
  });

  describe("ColorName type", () => {
    it("should accept valid color names", () => {
      const blue: ColorName = "blue";
      const green: ColorName = "green";
      const orange: ColorName = "orange";
      const yellow: ColorName = "yellow";
      const red: ColorName = "red";
      const purple: ColorName = "purple";

      expectTypeOf(blue).toExtend<ColorName>();
      expectTypeOf(green).toExtend<ColorName>();
      expectTypeOf(orange).toExtend<ColorName>();
      expectTypeOf(yellow).toExtend<ColorName>();
      expectTypeOf(red).toExtend<ColorName>();
      expectTypeOf(purple).toExtend<ColorName>();
    });

    it("should be one of the specific color names", () => {
      expectTypeOf<"blue">().toExtend<ColorName>();
      expectTypeOf<"red">().toExtend<ColorName>();
      expectTypeOf<ColorName>().toEqualTypeOf<
        "blue" | "green" | "orange" | "yellow" | "red" | "purple"
      >();
    });

    it("should be a string type", () => {
      expectTypeOf<ColorName>().toBeString();
    });
  });

  describe("Grid and Piece relationship", () => {
    it("should both use the same Cell type", () => {
      type GridCell = Grid<5, 5>[number][number];
      type PieceCell = Piece<5, 5>[number][number];

      expectTypeOf<GridCell>().toEqualTypeOf<PieceCell>();
    });

    it("should support dynamic dimensions", () => {
      expectTypeOf<Grid<10, 20>>().toExtend<(0 | 1)[][]>();
      expectTypeOf<Piece<7, 3>>().toExtend<(0 | 1)[][]>();
    });
  });
});
