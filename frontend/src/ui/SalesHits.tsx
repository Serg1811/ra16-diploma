"use client";

import { useGetSalesHitsQuery } from "@/lib/redux/services/catalogApi";
import { CatalogItemApiInterface } from "@/lib/types/apiDefinition";
import Link from "next/link";
import Preloader from "@/ui/Preloader";
import Error from "@/ui/Error";
import Image from "next/image";

export default function SalesHits() {
  const { data, isLoading, isFetching, error, refetch } =
    useGetSalesHitsQuery(undefined);

  if (error && !isFetching) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Error refetch={refetch} />
      </section>
    );
  }

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {isLoading || isFetching ? (
        <Preloader />
      ) : (
        <>
          <div className="row">
            {data?.map((item: CatalogItemApiInterface) => (
              <div className="col-4" key={item.id}>
                <div className="card h-100">
                  <Image
                    width={300}
                    height={300}
                    src={item.images[0]}
                    className="card-img-top img-fluid"
                    alt={item.title}
                    objectFit="contain"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.price} руб.</p>
                    <Link
                      href={`/catalog/${item.id}`}
                      className="btn btn-outline-primary"
                    >
                      Заказать
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
