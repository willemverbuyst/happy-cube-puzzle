import { clsx } from "clsx";
import { RotateCcwIcon, RotateCwIcon } from "lucide-react";
import { useState } from "react";
import { PIECE_SIZE } from "../config/general";
import { rotateLeft, rotateRight } from "../utils/rotate";

export default function Piece({
  color,
  piece,
}: {
  color: string;
  piece: Uint8Array<ArrayBuffer>;
}) {
  const [rotatedPiece, setRotatedPiece] = useState(piece);

  return (
    <div className="flex gap-2 items-start">
      <button
        onClick={() => {
          const newPiece = rotateLeft(rotatedPiece);
          setRotatedPiece(newPiece);
        }}
      >
        <RotateCcwIcon className="text-gray-400" size={14} />
      </button>
      <div
        style={
          {
            "--rows": PIECE_SIZE,
            "--cols": PIECE_SIZE,
            display: "grid",
            gridTemplateRows: "repeat(var(--rows), 20px)",
            gridTemplateColumns: "repeat(var(--cols), 20px)",
          } as React.CSSProperties
        }
      >
        {Array.from({ length: PIECE_SIZE }).map((_, r) =>
          Array.from({ length: PIECE_SIZE }).map((_, c) => {
            const i = r * PIECE_SIZE + c;
            return (
              <div
                key={`${r}-${c}`}
                className={clsx(
                  "w-5 h-5",
                  rotatedPiece[i] ? color : "bg-gray-200",
                )}
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
        <RotateCwIcon className="text-gray-400" size={14} />
      </button>
    </div>
  );
}
