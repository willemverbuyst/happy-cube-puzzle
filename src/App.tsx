import {
  BLUE_COLOR,
  BLUE_FRAME,
  BLUE_PIECE_1,
  BLUE_PIECE_2,
} from "./config/blue";
import Grid from "./Grid";
import { gridToUint8, pieceToUint8 } from "./helpers";
import Piece from "./Piece";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center p-20 gap-10">
      <Grid color={BLUE_COLOR} frame={gridToUint8(BLUE_FRAME)} />
      <div className="flex gap-10">
        <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_1)} />
        <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_2)} />
      </div>
    </div>
  );
}

export default App;
