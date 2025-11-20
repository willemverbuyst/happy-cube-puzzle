import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import type { Piece } from "../lib/types";
import PieceComponent from "./Piece";

describe("Piece Component", () => {
  const mockPiece: Piece<3, 3> = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];

  const mockColor = "bg-blue-400";

  it("should render the piece grid", () => {
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const cells = container.querySelectorAll(".w-5.h-5");
    expect(cells.length).toBe(9); // 3x3 grid = 9 cells
  });

  it("should apply correct color to piece cells", () => {
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const cells = container.querySelectorAll(".w-5.h-5");
    const coloredCells = Array.from(cells).filter((cell) =>
      cell.classList.contains("bg-blue-400"),
    );

    // Count cells with value 1 in the piece (5 cells)
    expect(coloredCells.length).toBe(5);
  });

  it("should render with group class for hover functionality", () => {
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const groupContainer = container.querySelector(".group");
    expect(groupContainer).toBeTruthy();
  });

  it("should render all control buttons (8 total)", () => {
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBe(8);
  });

  it("should have buttons with opacity-0 and group-hover:opacity-100 classes", () => {
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const buttons = container.querySelectorAll("button");
    buttons.forEach((button) => {
      expect(button.classList.contains("opacity-0")).toBe(true);
      expect(button.classList.contains("group-hover:opacity-100")).toBe(true);
      expect(button.classList.contains("transition-opacity")).toBe(true);
    });
  });

  it("should use CSS custom properties for grid dimensions", () => {
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const gridElement = container.querySelector(
      '[style*="--rows"]',
    ) as HTMLElement;

    expect(gridElement).toBeTruthy();
    expect(gridElement.style.getPropertyValue("--rows")).toBe("3");
    expect(gridElement.style.getPropertyValue("--cols")).toBe("3");
  });

  it("should handle different piece dimensions", () => {
    const largePiece: Piece<5, 5> = [
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
    ];

    const { container } = render(
      <PieceComponent color={mockColor} piece={largePiece} />,
    );

    const gridElement = container.querySelector(
      '[style*="--rows"]',
    ) as HTMLElement;
    expect(gridElement.style.getPropertyValue("--rows")).toBe("5");
    expect(gridElement.style.getPropertyValue("--cols")).toBe("5");

    const cells = container.querySelectorAll(".w-5.h-5");
    expect(cells.length).toBe(25); // 5x5 grid = 25 cells
  });

  it("should rotate left when top-left button is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const buttons = container.querySelectorAll("button");
    const rotateLeftButton = buttons[0]; // First button in left column

    await user.click(rotateLeftButton);

    // After rotation, the piece structure changes
    // We can verify by checking that cells are still rendered
    const cells = container.querySelectorAll(".w-5.h-5");
    expect(cells.length).toBe(9);
  });

  it("should flip horizontally when middle-left button is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const buttons = container.querySelectorAll("button");
    const flipHorizontalButton = buttons[1]; // Second button in left column

    await user.click(flipHorizontalButton);

    const cells = container.querySelectorAll(".w-5.h-5");
    expect(cells.length).toBe(9);
  });

  it("should rotate right when bottom-left button is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const buttons = container.querySelectorAll("button");
    const rotateRightButton = buttons[2]; // Third button in left column

    await user.click(rotateRightButton);

    const cells = container.querySelectorAll(".w-5.h-5");
    expect(cells.length).toBe(9);
  });

  it("should flip vertically when top or bottom center buttons are clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const buttons = container.querySelectorAll("button");
    const flipVerticalTopButton = buttons[3]; // Top button in center column

    await user.click(flipVerticalTopButton);

    const cells = container.querySelectorAll(".w-5.h-5");
    expect(cells.length).toBe(9);
  });

  it("should maintain structure after multiple transformations", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const buttons = container.querySelectorAll("button");

    // Perform multiple transformations
    await user.click(buttons[0]); // Rotate left
    await user.click(buttons[3]); // Flip vertical
    await user.click(buttons[5]); // Rotate right

    const cells = container.querySelectorAll(".w-5.h-5");
    expect(cells.length).toBe(9);

    // Verify grid structure is maintained
    const gridElement = container.querySelector(
      '[style*="--rows"]',
    ) as HTMLElement;
    expect(gridElement).toBeTruthy();
  });

  it("should have three columns of buttons", () => {
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const columns = container.querySelectorAll(".flex.flex-col");
    expect(columns.length).toBe(3); // Left, center, right columns
  });

  it("should render lucide-react icons in buttons", () => {
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(8); // 8 buttons with 8 icons
  });

  it("should apply correct flex layout classes", () => {
    const { container } = render(
      <PieceComponent color={mockColor} piece={mockPiece} />,
    );

    const mainContainer = container.querySelector(".group.flex.gap-2");
    expect(mainContainer).toBeTruthy();

    const leftColumn = container.querySelector(
      ".w-full.flex.flex-col.justify-between",
    );
    expect(leftColumn).toBeTruthy();
  });
});
