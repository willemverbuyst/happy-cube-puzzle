import { clsx } from "clsx";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
} from "lucide-react";
import { useState } from "react";
import {
  flipHorizontal,
  flipVertical,
  rotateLeft,
  rotateRight,
} from "../lib/rotate";
import { nestedArrayToUint8 } from "../lib/toUint8";
import type { Piece } from "../types";

export default function Piece({
  color,
  piece,
}: {
  color: string;
  piece: Piece<number, number>;
}) {
  const pieceAsUint8Array = nestedArrayToUint8({
    pattern: piece,
    rows: piece.length,
    columns: piece[0].length,
  });
  const [rotatedPiece, setRotatedPiece] = useState(pieceAsUint8Array);

  return (
    <div className="flex gap-2">
      <div className="w-full flex flex-col justify-between">
        <button
          onClick={() => {
            setRotatedPiece(rotateLeft(rotatedPiece));
          }}
          className="p-2"
        >
          <CornerLeftDown className="text-gray-400" size={14} />
        </button>
        <button
          onClick={() => {
            setRotatedPiece(flipHorizontal(rotatedPiece));
          }}
          className="p-2"
        >
          <ArrowRight className="text-gray-400" size={14} />
        </button>
        <button
          onClick={() => {
            setRotatedPiece(rotateRight(rotatedPiece));
          }}
          className="p-2"
        >
          <CornerLeftUp className="text-gray-400" size={14} />
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-between">
        <button
          onClick={() => {
            setRotatedPiece(flipVertical(rotatedPiece));
          }}
          className="p-2"
        >
          <ArrowDown className="text-gray-400" size={14} />
        </button>
        <div
          style={
            {
              "--rows": piece.length,
              "--cols": piece[0].length,
              display: "grid",
              gridTemplateRows: "repeat(var(--rows), 20px)",
              gridTemplateColumns: "repeat(var(--cols), 20px)",
            } as React.CSSProperties
          }
        >
          {Array.from({ length: piece.length }).map((_, r) =>
            Array.from({ length: piece[0].length }).map((_, c) => {
              const i = r * piece[0].length + c;
              return (
                <div
                  key={`${r}-${c}`}
                  className={clsx(
                    "w-5 h-5",
                    rotatedPiece[i] ? color : "inherit",
                  )}
                />
              );
            }),
          )}
        </div>
        <button
          onClick={() => {
            setRotatedPiece(flipVertical(rotatedPiece));
          }}
          className="p-2"
        >
          <ArrowUp className="text-gray-400" size={14} />
        </button>
      </div>

      <div className="w-full flex flex-col justify-between">
        <button
          onClick={() => {
            setRotatedPiece(rotateRight(rotatedPiece));
          }}
          className="p-2"
        >
          <CornerRightDown className="text-gray-400" size={14} />
        </button>
        <button
          onClick={() => {
            setRotatedPiece(flipHorizontal(rotatedPiece));
          }}
          className="p-2"
        >
          <ArrowLeft className="text-gray-400" size={14} />
        </button>
        <button
          onClick={() => {
            setRotatedPiece(rotateLeft(rotatedPiece));
          }}
          className="p-2"
        >
          <CornerRightUp className="text-gray-400" size={14} />
        </button>
      </div>
    </div>
  );
}
