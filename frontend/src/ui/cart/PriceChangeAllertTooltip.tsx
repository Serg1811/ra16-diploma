import { useGetItemQuery } from "@/lib/redux/services/catalogApi";
import Link from "next/link";

export default function PriceChangeAllertTooltip({
  id,
  price,
}: {
  id: number;
  price: number;
}) {
  const { data, isLoading, error } = useGetItemQuery(id);

  if (isLoading || error) {
    return null;
  }

  if (data?.price !== price) {
    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          height: "15px",
          width: "92px",
          borderRadius: "2%",
          padding: "0 3px",
          top: "-30%",
          right: "41%",
          transform: "translate(100%, -50%)",
          fontSize: "0.6rem",
          color: "white",
        }}
      >
        <Link href={"/catalog/" + id + "/"} style={{ color: "white" }}>
          Цена изменилась
        </Link>
      </div>
    );
  }
}
