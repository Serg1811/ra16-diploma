"use client";

import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useEffect, useRef } from "react";
import { searchActions } from "@/lib/redux/features/search/searchSlice";
import { RootState } from "@/lib/redux/store";
import { selectSearchQuery } from "@/lib/redux/features/search/selectors";

export default function Search() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchQuery = useSelector((state: RootState) =>
    selectSearchQuery(state),
  );

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchActions.searchQuery(event.currentTarget.search.value));
  };

  useEffect(() => {
    if (searchQuery && inputRef.current) {
      inputRef.current.value = searchQuery;
    }
  }, [searchQuery]);

  return (
    <form onSubmit={submitHandler} className="catalog-search-form form-inline">
      <input
        ref={inputRef}
        className="form-control"
        name="search"
        placeholder="Поиск"
      />
    </form>
  );
}
