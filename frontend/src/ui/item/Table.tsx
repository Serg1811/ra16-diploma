import { CatalogItemInterface } from "@/lib/types/apiDefinition";

export default function Table({
  data,
}: {
  data: CatalogItemInterface | undefined;
}) {
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td>Артикул</td>
          <td>{data?.sku ?? ""}</td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>{data?.manufacturer ?? ""}</td>
        </tr>
        <tr>
          <td>Цвет</td>
          <td>{data?.color ?? ""}</td>
        </tr>
        <tr>
          <td>Материалы</td>
          <td>{data?.material ?? ""}</td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>{data?.season ?? ""}</td>
        </tr>
        <tr>
          <td>Повод</td>
          <td>{data?.reason ?? ""}</td>
        </tr>
      </tbody>
    </table>
  );
}
