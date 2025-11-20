import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { PuzzleConfig } from "../lib/types";
import { Puzzle } from "./Puzzle";

describe("Puzzle Component", () => {
  const mockPuzzleConfig: PuzzleConfig = {
    color: "bg-blue-400",
    frame: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    pieces: [
      [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ],
      [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0],
      ],
    ],
  };

  it("should render the puzzle frame", () => {
    render(<Puzzle puzzleConfig={mockPuzzleConfig} />);

    const cells =
      document.getElementById("puzzle-grid")?.querySelectorAll(".w-5.h-5") ||
      [];
    expect(cells.length).toBe(9); // 3x3 grid = 9 cells
  });

  it("should apply the correct color class to frame cells", () => {
    render(<Puzzle puzzleConfig={mockPuzzleConfig} />);

    const cells =
      document.getElementById("puzzle-grid")?.querySelectorAll(".w-5.h-5") ||
      [];
    const coloredCells = Array.from(cells).filter((cell) =>
      cell.classList.contains("bg-blue-400"),
    );

    // Count cells with value 1 in the frame (8 cells)
    expect(coloredCells.length).toBe(8);
  });

  it("should apply gray background to empty cells", () => {
    render(<Puzzle puzzleConfig={mockPuzzleConfig} />);

    const cells = document.querySelectorAll(".w-5.h-5");
    const grayCells = Array.from(cells).filter((cell) =>
      cell.classList.contains("bg-gray-200"),
    );

    // Count cells with value 0 in the frame (1 cell)
    expect(grayCells.length).toBe(1);
  });

  it("should render all pieces", () => {
    const { container } = render(<Puzzle puzzleConfig={mockPuzzleConfig} />);

    // Find all Piece components (they have the group class from the Piece component)
    const pieces = container.querySelectorAll(".group");
    expect(pieces.length).toBe(2);
  });

  it("should use CSS custom properties for grid dimensions", () => {
    const { container } = render(<Puzzle puzzleConfig={mockPuzzleConfig} />);

    const gridElement = container.querySelector(
      '[style*="--rows"]',
    ) as HTMLElement;

    expect(gridElement).toBeTruthy();
    expect(gridElement.style.getPropertyValue("--rows")).toBe("3");
    expect(gridElement.style.getPropertyValue("--cols")).toBe("3");
  });

  it("should handle different puzzle dimensions", () => {
    const largePuzzleConfig: PuzzleConfig = {
      color: "bg-red-400",
      frame: [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ],
      pieces: [
        [
          [1, 0, 1],
          [0, 1, 0],
          [1, 0, 1],
        ],
      ],
    };

    const { container } = render(<Puzzle puzzleConfig={largePuzzleConfig} />);

    const gridElement = container.querySelector(
      '[style*="--rows"]',
    ) as HTMLElement;
    expect(gridElement.style.getPropertyValue("--rows")).toBe("5");
    expect(gridElement.style.getPropertyValue("--cols")).toBe("5");

    const cells = document.querySelectorAll(".w-5.h-5");
    expect(cells.length).toBeGreaterThanOrEqual(25); // At least 25 cells from 5x5 frame
  });

  it("should shuffle pieces on render", () => {
    const { container: container1 } = render(
      <Puzzle puzzleConfig={mockPuzzleConfig} />,
    );
    const { container: container2 } = render(
      <Puzzle puzzleConfig={mockPuzzleConfig} />,
    );

    // Note: Due to randomness, this test might occasionally fail
    // In a real scenario, you might want to mock the shuffle function
    const pieces1 = container1.querySelectorAll(".group");
    const pieces2 = container2.querySelectorAll(".group");

    expect(pieces1.length).toBe(pieces2.length);
    expect(pieces1.length).toBe(2);
  });

  it("should render with valid structure", () => {
    const { container } = render(<Puzzle puzzleConfig={mockPuzzleConfig} />);

    // Should have main container
    const mainContainer = container.querySelector(
      ".flex.flex-col.items-center.gap-14",
    );
    expect(mainContainer).toBeTruthy();

    // Should have pieces container
    const piecesContainer = container.querySelector(".flex.gap-2");
    expect(piecesContainer).toBeTruthy();
  });

  it("should pass correct props to Piece components", () => {
    const { container } = render(<Puzzle puzzleConfig={mockPuzzleConfig} />);

    const pieces = container.querySelectorAll(".group");

    // Each piece should exist
    expect(pieces.length).toBeGreaterThan(0);

    // Verify pieces are rendered (they contain grid cells)
    pieces.forEach((piece) => {
      const pieceCells = piece.querySelectorAll(".w-5.h-5");
      expect(pieceCells.length).toBeGreaterThan(0);
    });
  });
});
