import Piece from "./components/Piece";
import { Puzzle } from "./components/Puzzle";
import {
  BLUE_COLOR,
  BLUE_FRAME,
  BLUE_PIECE_1,
  BLUE_PIECE_2,
  BLUE_PIECE_3,
  BLUE_PIECE_4,
  BLUE_PIECE_5,
  BLUE_PIECE_6,
} from "./config/blue";
import { pieceToUint8, puzzleToUint8 } from "./utils/toUint8";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center p-20 gap-20">
      <Puzzle color={BLUE_COLOR} frame={puzzleToUint8(BLUE_FRAME)} />
      <div className="flex flex-col gap-20">
        <div className="flex gap-20">
          <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_1)} />
          <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_2)} />
          <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_3)} />
        </div>
        <div className="flex gap-20">
          <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_4)} />
          <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_5)} />
          <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_6)} />
        </div>
      </div>
    </div>
  );
}

export default App;
