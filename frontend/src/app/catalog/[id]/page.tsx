"use client";

import { useGetItemQuery } from "@/lib/redux/services/catalogApi";
import { ReactNode, useState } from "react";
import Table from "@/ui/item/Table";
import Sizes from "@/ui/item/Sizes";
import Quantity from "@/ui/item/Quantity";
import { cartActions } from "@/lib/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks";
import NotFound from "@/ui/NotFound";
import Preloader from "@/ui/Preloader";
import { Size } from "@/lib/types/apiDefinition";

export default function ItemPage({ params }: { params: { id: number } }) {
  const [chosenSize, setChosenSize] = useState("");
  const [amount, setAmount] = useState(1);

  const { data, isLoading, error } = useGetItemQuery(params.id);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const addToCardHandler = () => {
    if (chosenSize !== "" && data) {
      dispatch(
        cartActions.addToCart({
          id: data.id,
          size: chosenSize,
          quantity: amount,
          price: data.price,
          title: data.title,
        }),
      );
      router.push("/cart");
    }
  };

  if (error) {
    return <NotFound />;
  }

  return (
    <section className="catalog-item">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h2 className="text-center">{data?.title}</h2>
          <div className="row">
            <div className="col-5">
              <img
                src={data?.images[0]}
                className="img-fluid"
                alt={data?.title}
              />
            </div>
            <div className="col-7">
              <Table data={data} />
              <div className="text-center">
                <Sizes
                  sizes={data?.sizes}
                  chosenSize={chosenSize}
                  setChosenSize={setChosenSize}
                />
                <Availability sizes={data?.sizes}>
                  <Quantity amount={amount} setAmount={setAmount} />
                </Availability>
              </div>
              <Availability sizes={data?.sizes}>
                <button
                  disabled={chosenSize === ""}
                  onClick={addToCardHandler}
                  className="btn btn-danger btn-block btn-lg"
                  style={{ width: "100%" }}
                >
                  В корзину
                </button>
              </Availability>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

function Availability({
  children,
  sizes,
}: {
  children: ReactNode;
  sizes: Size[] | undefined;
}) {
  return sizes?.some((size: Size) => size.available) && children;
}
