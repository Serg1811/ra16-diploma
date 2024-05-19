import Link from "next/link";
import Banner from "@/ui/Banner";

export default function NotFound() {
  return (
    <>
      <Banner />
      <section className="top-sales">
        <h2 className="text-center" style={{ color: "gray" }}>
          Страница не найдена
        </h2>
        <Link href="/">
          <p className="text-center">
            <button className="btn btn-outline-secondary btn-light">
              Вернуться на главную
            </button>
          </p>
        </Link>
      </section>
    </>
  );
}
