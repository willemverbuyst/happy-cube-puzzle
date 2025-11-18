import "./App.css";
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
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Grid color={BLUE_COLOR} frame={gridToUint8(BLUE_FRAME)} />
      <div style={{ display: "flex", gap: 30 }}>
        <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_1)} />
        <Piece color={BLUE_COLOR} piece={pieceToUint8(BLUE_PIECE_2)} />
      </div>
    </section>
  );
}

export default App;
