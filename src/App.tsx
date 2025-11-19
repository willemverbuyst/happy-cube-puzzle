import clsx from "clsx";
import { useState } from "react";
import { Puzzle } from "./components/Puzzle";
import { COLORS, type ColorType } from "./config/general";
import { PUZZLES } from "./config/puzzles";

function App() {
  const [color, setColor] = useState<ColorType>("blue");

  return (
    <div className="w-screen flex flex-col items-center p-20 gap-14">
      <div className="flex gap-2">
        {COLORS.map((color) => (
          <button
            key={color}
            type="button"
            className={clsx("w-5 h-5", `bg-${color}-400`)}
            onClick={() => setColor(color)}
          />
        ))}
      </div>
      <Puzzle puzzleConfig={PUZZLES[color]} />
    </div>
  );
}

export default App;
