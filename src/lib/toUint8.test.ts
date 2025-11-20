import { describe, expect, it } from "vitest";
import { nestedArrayToUint8 } from "./toUint8";

describe("nestedArrayToUint8", () => {
  it("should convert a 2x2 nested array to Uint8Array", () => {
    const pattern = [
      [1, 2],
      [3, 4],
    ];
    const result = nestedArrayToUint8({ pattern, rows: 2, columns: 2 });

    expect(result).toBeInstanceOf(Uint8Array);
    expect(Array.from(result)).toEqual([1, 2, 3, 4]);
  });

  it("should convert a 3x3 nested array to Uint8Array", () => {
    const pattern = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
    const result = nestedArrayToUint8({ pattern, rows: 3, columns: 3 });

    expect(result).toBeInstanceOf(Uint8Array);
    expect(Array.from(result)).toEqual([0, 1, 0, 1, 1, 1, 0, 1, 0]);
  });

  it("should handle rectangular arrays (2x3)", () => {
    const pattern = [
      [5, 10, 15],
      [20, 25, 30],
    ];
    const result = nestedArrayToUint8({ pattern, rows: 2, columns: 3 });

    expect(result).toBeInstanceOf(Uint8Array);
    expect(Array.from(result)).toEqual([5, 10, 15, 20, 25, 30]);
  });

  it("should handle single row array", () => {
    const pattern = [[7, 8, 9]];
    const result = nestedArrayToUint8({ pattern, rows: 1, columns: 3 });

    expect(result).toBeInstanceOf(Uint8Array);
    expect(Array.from(result)).toEqual([7, 8, 9]);
  });

  it("should handle single column array", () => {
    const pattern = [[1], [2], [3]];
    const result = nestedArrayToUint8({ pattern, rows: 3, columns: 1 });

    expect(result).toBeInstanceOf(Uint8Array);
    expect(Array.from(result)).toEqual([1, 2, 3]);
  });

  it("should handle array with zeros", () => {
    const pattern = [
      [0, 0],
      [0, 0],
    ];
    const result = nestedArrayToUint8({ pattern, rows: 2, columns: 2 });

    expect(result).toBeInstanceOf(Uint8Array);
    expect(Array.from(result)).toEqual([0, 0, 0, 0]);
  });
});
