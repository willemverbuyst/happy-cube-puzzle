import { useState } from "react";
import { PIECE_SIZE } from "./config/general";
import { rotateLeft, rotateRight } from "./helpers";

export default function Piece({
  color,
  piece,
}: {
  color: string;
  piece: Uint8Array<ArrayBuffer>;
}) {
  const [rotatedPiece, setRotatedPiece] = useState(piece);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button
        onClick={() => {
          const newPiece = rotateLeft(rotatedPiece);
          setRotatedPiece(newPiece);
        }}
      >
        Rotate -90°
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${PIECE_SIZE}, 20px)`,
          gridTemplateColumns: `repeat(${PIECE_SIZE}, 20px)`,
        }}
      >
        {Array.from({ length: PIECE_SIZE }).map((_, r) =>
          Array.from({ length: PIECE_SIZE }).map((_, c) => {
            const i = r * PIECE_SIZE + c;
            return (
              <div
                key={`${r}-${c}`}
                style={{
                  width: 20,
                  height: 20,
                  background: rotatedPiece[i] ? color : "#eee",
                }}
              />
            );
          }),
        )}
      </div>
      <button
        onClick={() => {
          setRotatedPiece(rotateRight(rotatedPiece));
        }}
      >
        Rotate 90°
      </button>
    </div>
  );
}
