"use client";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/redux/store";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const store = useRef<AppStore>();
  if (!store.current) store.current = makeStore();

  return <Provider store={store.current}>{children}</Provider>;
}
