import clsx from "clsx";
import { useState } from "react";
import { Puzzle } from "./components/Puzzle";
import { COLORS, PUZZLES } from "./config/puzzles";
import type { ColorType } from "./lib/types";

function App() {
  const [color, setColor] = useState<ColorType>("blue");

  return (
    <div className="flex w-screen flex-col items-center gap-14 p-20">
      <div className="flex gap-2">
        {COLORS.map((color) => (
          <button
            key={color}
            type="button"
            className={clsx("h-5 w-5", `bg-${color}-400`)}
            onClick={() => setColor(color)}
          />
        ))}
      </div>
      <Puzzle puzzleConfig={PUZZLES[color]} />
    </div>
  );
}

export default App;
