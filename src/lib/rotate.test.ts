import { describe, expect, it } from "vitest";
import {
  flipHorizontal,
  flipVertical,
  rotateLeft,
  rotateRight,
} from "./rotate";

describe("rotateRight", () => {
  it("should rotate a 5x5 grid 90 degrees clockwise", () => {
    const input = new Uint8Array([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ]);

    const expected = new Uint8Array([
      21, 16, 11, 6, 1, 22, 17, 12, 7, 2, 23, 18, 13, 8, 3, 24, 19, 14, 9, 4,
      25, 20, 15, 10, 5,
    ]);

    const result = rotateRight({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should handle a grid with all zeros", () => {
    const input = new Uint8Array(25).fill(0);
    const expected = new Uint8Array(25).fill(0);

    const result = rotateRight({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should handle a grid with all ones", () => {
    const input = new Uint8Array(25).fill(1);
    const expected = new Uint8Array(25).fill(1);

    const result = rotateRight({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should return a new array instance", () => {
    const input = new Uint8Array(25).fill(1);
    const result = rotateRight({ arr: input, rows: 5, columns: 5 });

    expect(result).not.toBe(input);
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBe(25);
  });
});

describe("rotateLeft", () => {
  it("should rotate a 5x5 grid 90 degrees counter-clockwise", () => {
    const input = new Uint8Array([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ]);

    const expected = new Uint8Array([
      5, 10, 15, 20, 25, 4, 9, 14, 19, 24, 3, 8, 13, 18, 23, 2, 7, 12, 17, 22,
      1, 6, 11, 16, 21,
    ]);

    const result = rotateLeft({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should handle a grid with all zeros", () => {
    const input = new Uint8Array(25).fill(0);
    const expected = new Uint8Array(25).fill(0);

    const result = rotateLeft({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should handle a grid with all ones", () => {
    const input = new Uint8Array(25).fill(1);
    const expected = new Uint8Array(25).fill(1);

    const result = rotateLeft({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should return a new array instance", () => {
    const input = new Uint8Array(25).fill(1);
    const result = rotateLeft({ arr: input, rows: 5, columns: 5 });

    expect(result).not.toBe(input);
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBe(25);
  });
});

describe("flipHorizontal", () => {
  it("should flip a 5x5 grid horizontally", () => {
    const input = new Uint8Array([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ]);

    const expected = new Uint8Array([
      5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 15, 14, 13, 12, 11, 20, 19, 18, 17, 16, 25,
      24, 23, 22, 21,
    ]);

    const result = flipHorizontal({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should handle a grid with all zeros", () => {
    const input = new Uint8Array(25).fill(0);
    const expected = new Uint8Array(25).fill(0);

    const result = flipHorizontal({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should handle a grid with all ones", () => {
    const input = new Uint8Array(25).fill(1);
    const expected = new Uint8Array(25).fill(1);

    const result = flipHorizontal({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should return a new array instance", () => {
    const input = new Uint8Array(25).fill(1);
    const result = flipHorizontal({ arr: input, rows: 5, columns: 5 });

    expect(result).not.toBe(input);
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBe(25);
  });
});

describe("flipVertical", () => {
  it("should flip a 5x5 grid vertically", () => {
    const input = new Uint8Array([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ]);

    const expected = new Uint8Array([
      21, 22, 23, 24, 25, 16, 17, 18, 19, 20, 11, 12, 13, 14, 15, 6, 7, 8, 9,
      10, 1, 2, 3, 4, 5,
    ]);

    const result = flipVertical({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should handle a grid with all zeros", () => {
    const input = new Uint8Array(25).fill(0);
    const expected = new Uint8Array(25).fill(0);

    const result = flipVertical({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should handle a grid with all ones", () => {
    const input = new Uint8Array(25).fill(1);
    const expected = new Uint8Array(25).fill(1);

    const result = flipVertical({ arr: input, rows: 5, columns: 5 });
    expect(result).toEqual(expected);
  });

  it("should return a new array instance", () => {
    const input = new Uint8Array(25).fill(1);
    const result = flipVertical({ arr: input, rows: 5, columns: 5 });

    expect(result).not.toBe(input);
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBe(25);
  });
});
