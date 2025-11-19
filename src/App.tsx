import { BluePuzzle } from "./components/Puzzles/BluePuzzle";
import { GreenPuzzle } from "./components/Puzzles/GreenPuzzle";
import { OrangePuzzle } from "./components/Puzzles/OrangePuzzle";
import { PurplePuzzle } from "./components/Puzzles/PurplePuzzle";
import { RedPuzzle } from "./components/Puzzles/RedPuzzle";
import { YellowPuzzle } from "./components/Puzzles/YellowPuzzle";

function App() {
  return (
    <div className="w-screen flex flex-col items-center p-20 gap-20">
      <BluePuzzle />
      <GreenPuzzle />
      <OrangePuzzle />
      <YellowPuzzle />
      <RedPuzzle />
      <PurplePuzzle />
    </div>
  );
}

export default App;
