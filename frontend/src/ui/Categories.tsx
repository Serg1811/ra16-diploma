import { useGetCategoriesQuery } from "@/lib/redux/services/catalogApi";
import { CatalogCategoryApiInterface } from "@/lib/types/apiDefinition";
import { Dispatch, SetStateAction, MouseEvent } from "react";

export default function Categories({
  categoryId,
  setOffset,
}: {
  categoryId: Dispatch<null | number>;
  setOffset: Dispatch<SetStateAction<number>>;
}) {
  const { data, isLoading, error } = useGetCategoriesQuery(undefined);

  if (error || isLoading) {
    return null;
  }

  const categoryHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    categoryId(event.currentTarget.id ? Number(event.currentTarget.id) : null);
    setOffset(0);
  };
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <button onClick={categoryHandler} className="nav-link">
          Все
        </button>
      </li>
      {data?.map((category: CatalogCategoryApiInterface) => (
        <li className="nav-item" key={category.id}>
          <button
            onClick={categoryHandler}
            className="nav-link"
            id={category.id.toString()}
          >
            {category.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
