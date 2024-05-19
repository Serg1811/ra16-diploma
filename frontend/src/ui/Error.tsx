export default function Error({ refetch }: { refetch: () => void }) {
  return (
    <>
      <h5 className="text-center" style={{ color: "gray" }}>
        При загрузке произошла ошибка
      </h5>
      <p className="text-center">
        <button onClick={() => refetch()} className="btn btn-outline-secondary">
          Повторить
        </button>
      </p>
    </>
  );
}
