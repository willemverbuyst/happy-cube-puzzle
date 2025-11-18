import "./App.css";
import { BLUE_COLOR, BLUE_FRAME } from "./config/blue";
import Grid from "./Grid";
import { patternToUint8 } from "./helpers";

function App() {
  return <Grid color={BLUE_COLOR} frame={patternToUint8(BLUE_FRAME)} />;
}

export default App;
