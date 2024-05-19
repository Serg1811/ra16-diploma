"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { searchActions } from "@/lib/redux/features/search/searchSlice";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectCartList } from "@/lib/redux/features/cart/selectors";

export default function SearchFormAndCart() {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButton = useRef<HTMLDivElement>(null);
  const cartTotal = useAppSelector((state) => selectCartList(state).length);
  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    if (showSearchForm && !searchInputRef.current?.value) {
      searchInputRef.current?.focus();
    }
  }, [showSearchForm]);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchInputRef.current && searchInputRef.current.value.trim()) {
      dispatch(searchActions.searchQuery(searchInputRef.current.value));
      setShowSearchForm((prev) => !prev);
      router.push("/catalog");
    }
  };

  const searchHandler = () => {
    if (!showSearchForm) {
      setShowSearchForm(true);
    } else {
      if (
        showSearchForm &&
        searchInputRef.current &&
        searchInputRef.current.value.trim()
      ) {
        (
          document.querySelector(
            ".header-controls-search-form",
          ) as HTMLFormElement
        ).requestSubmit();
        searchInputRef.current.value = "";
      }

      setShowSearchForm(false);
    }
  };

  return (
    <div>
      <div className="header-controls-pics">
        <div
          onClick={searchHandler}
          ref={searchButton}
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
        />
        <div
          onClick={() => router.push("/cart")}
          className="header-controls-pic header-controls-cart"
        >
          {cartTotal > 0 && (
            <div className="header-controls-cart-full">{cartTotal}</div>
          )}
          <div className="header-controls-cart-menu" />
        </div>
        <form
          onSubmit={submitHandler}
          data-id="search-form"
          className={clsx(
            "header-controls-search-form form-inline",
            showSearchForm ? "visible" : "invisible",
          )}
        >
          <input
            className="form-control"
            placeholder="Поиск"
            ref={searchInputRef}
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
