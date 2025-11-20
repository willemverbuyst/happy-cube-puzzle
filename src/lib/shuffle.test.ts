import { describe, expect, it } from "vitest";
import { shuffleArray } from "./shuffle";

describe("shuffleArray", () => {
  it("should return an array of the same length", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result).toHaveLength(input.length);
  });

  it("should contain all original elements", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result.sort()).toEqual(input.sort());
  });

  it("should not mutate the original array", () => {
    const input = [1, 2, 3, 4, 5];
    const original = [...input];
    shuffleArray(input);
    expect(input).toEqual(original);
  });

  it("should handle empty array", () => {
    const result = shuffleArray([]);
    expect(result).toEqual([]);
  });

  it("should handle single element array", () => {
    const input = [42];
    const result = shuffleArray(input);
    expect(result).toEqual([42]);
  });

  it("should work with different data types", () => {
    const strings = ["a", "b", "c"];
    const result = shuffleArray(strings);
    expect(result).toHaveLength(3);
    expect(result.sort()).toEqual(["a", "b", "c"]);
  });

  it("should produce different results on multiple calls (probabilistic)", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = Array.from({ length: 10 }, () => shuffleArray(input));
    const allSame = results.every((result) =>
      result.every((val, idx) => val === results[0][idx]),
    );
    expect(allSame).toBe(false);
  });
});
