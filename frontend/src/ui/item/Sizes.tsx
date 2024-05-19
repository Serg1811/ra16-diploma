import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

export default function Sizes({
  sizes,
  chosenSize,
  setChosenSize,
}: {
  sizes: { size: string; available: boolean }[] | undefined;
  chosenSize: string;
  setChosenSize: Dispatch<SetStateAction<string>>;
}) {
  return (
    <p>
      Размеры в наличии:{" "}
      {sizes?.map((size: { size: string; available: boolean }) => {
        if (size.available) {
          return (
            <span
              onClick={() => setChosenSize(size.size)}
              style={{ cursor: "pointer" }}
              key={size.size}
              className={clsx(
                "catalog-item-size",
                size.size === chosenSize && "selected",
              )}
            >
              {size.size}
            </span>
          );
        }
      })}
    </p>
  );
}
