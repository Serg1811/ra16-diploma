"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectCartList } from "@/lib/redux/features/cart/selectors";
import { useSendOrderMutation } from "@/lib/redux/services/catalogApi";
import { cartActions } from "@/lib/redux/features/cart/cartSlice";
import Cart from "@/ui/cart/Cart";
import Preloader from "@/ui/Preloader";
import { useEffect, useRef } from "react";

export default function Order() {
  const products = useAppSelector((state) => selectCartList(state));
  const [sendOrder, { isSuccess, isLoading }] = useSendOrderMutation();
  const dispatch = useAppDispatch();

  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phoneRef.current && addressRef.current) {
      phoneRef.current.value =
        typeof window !== "undefined" &&
        localStorage.getItem("orderCredentials")
          ? JSON.parse(localStorage.getItem("orderCredentials") || "").phone
          : "";
      addressRef.current.value =
        typeof window !== "undefined" &&
        localStorage.getItem("orderCredentials")
          ? JSON.parse(localStorage.getItem("orderCredentials") || "").address
          : "";
    }
  }, []);

  const submitHandler = async (formData: FormData) => {
    const order = {
      owner: {
        phone: formData.get("phone"),
        address: formData.get("address"),
      },
      items: products.map((item) => ({
        id: item.id,
        price: item.price,
        count: item.quantity,
        size: item.size,
      })),
    };

    const result = await sendOrder(order);
    if (result.hasOwnProperty("data")) {
      dispatch(cartActions.reset());
    }
    if (result.hasOwnProperty("error")) {
      alert("Произошла ошибка");
    }

    typeof window !== "undefined" &&
      localStorage.setItem(
        "orderCredentials",
        JSON.stringify({
          phone: formData.get("phone"),
          address: formData.get("address"),
        }),
      );
  };

  if (products.length === 0) {
    if (isSuccess) {
      return (
        <section className="order">
          <h2 className="text-center">Заказ оформлен</h2>
        </section>
      );
    }
    return <Cart />;
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Cart />
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
          <form action={submitHandler} className="card-body">
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                ref={phoneRef}
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Ваш телефон"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <input
                ref={addressRef}
                className="form-control"
                id="address"
                name="address"
                placeholder="Адрес доставки"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreement"
                name="agreement"
              />
              <label className="form-check-label" htmlFor="agreement">
                Согласен с правилами доставки
              </label>
            </div>
            <button type="submit" className="btn btn-outline-secondary">
              Оформить
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
