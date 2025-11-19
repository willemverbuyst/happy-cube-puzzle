import clsx from "clsx";
import { useState, type ReactElement } from "react";
import { BluePuzzle } from "./components/Puzzles/BluePuzzle";
import { GreenPuzzle } from "./components/Puzzles/GreenPuzzle";
import { OrangePuzzle } from "./components/Puzzles/OrangePuzzle";
import { PurplePuzzle } from "./components/Puzzles/PurplePuzzle";
import { RedPuzzle } from "./components/Puzzles/RedPuzzle";
import { YellowPuzzle } from "./components/Puzzles/YellowPuzzle";

function App() {
  const colors = [
    "blue",
    "green",
    "orange",
    "yellow",
    "red",
    "purple",
  ] as const;
  const [color, setColor] = useState<(typeof colors)[number]>("blue");
  const Puzzles: Record<(typeof colors)[number], ReactElement> = {
    blue: <BluePuzzle />,
    green: <GreenPuzzle />,
    orange: <OrangePuzzle />,
    yellow: <YellowPuzzle />,
    red: <RedPuzzle />,
    purple: <PurplePuzzle />,
  };

  return (
    <div className="w-screen flex flex-col items-center p-20 gap-14">
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={clsx("w-5 h-5", `bg-${color}-400`)}
            onClick={() => setColor(color)}
          />
        ))}
      </div>
      {Puzzles[color]}
    </div>
  );
}

export default App;
