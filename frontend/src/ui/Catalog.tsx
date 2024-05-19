"use client";

import { useGetItemsQuery } from "@/lib/redux/services/catalogApi";
import Categories from "@/ui/Categories";
import { ReactNode, useState } from "react";
import { RootState } from "@/lib/redux/store";
import { selectSearchQuery } from "@/lib/redux/features/search/selectors";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/lib/redux/hooks";
import Preloader from "@/ui/Preloader";
import Error from "@/ui/Error";
import { CatalogItemApiInterface } from "@/lib/types/apiDefinition";

export default function Catalog({ children }: { children: ReactNode }) {
  const [offset, setOffset] = useState(0);
  const [category, setCategory] = useState<number | null>(null);
  const searchQuery = useAppSelector((state: RootState) =>
    selectSearchQuery(state),
  );
  const { data, isLoading, error, refetch, isFetching } = useGetItemsQuery({
    offset: offset,
    categoryId: category,
    q: searchQuery,
  });

  if (error && !isFetching) {
    return (
      <CatalogWrapper>
        {children}
        <Categories categoryId={setCategory} setOffset={setOffset} />
        <Error refetch={refetch} />
      </CatalogWrapper>
    );
  }

  if (data && data.length === 0 && searchQuery) {
    return (
      <CatalogWrapper>
        {children}
        <Categories categoryId={setCategory} setOffset={setOffset} />
        <h4 className="text-center">Товары не найдены</h4>
      </CatalogWrapper>
    );
  }

  return (
    <CatalogWrapper>
      {children}
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Categories categoryId={setCategory} setOffset={setOffset} />
          <div className="row g-4 mb-4">
            {data?.map((item: CatalogItemApiInterface) => (
              <div className="col-4" key={item.id}>
                <div className="card h-100 catalog-item-card">
                  <Image
                    src={item.images[0]}
                    width={300}
                    height={300}
                    className="image-container card-img-top img-fluid"
                    alt={item.title}
                    objectFit="contain"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="mt-auto">
                      <p className="card-text">{item.title}</p>
                      <p className="card-text">{item.price} руб.</p>
                      <Link
                        href={`/catalog/${item.id}/`}
                        className="btn btn-outline-primary"
                      >
                        Заказать
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isFetching && <Preloader />}
          {data.length >= offset + 6 && (
            <div className="text-center">
              <button
                type="button"
                aria-disabled={isLoading}
                disabled={isLoading}
                onClick={() => setOffset((prev) => prev + 6)}
                className="btn btn-outline-primary"
              >
                Загрузить ещё
              </button>
            </div>
          )}
        </>
      )}
    </CatalogWrapper>
  );
}

export function CatalogWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {children}
    </section>
  );
}
