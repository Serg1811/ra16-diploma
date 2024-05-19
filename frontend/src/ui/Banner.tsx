import Image from "next/image";

export default function Banner() {
  return (
    <div className="banner">
      <Image
        src="/img/banner.jpg"
        className="img-fluid"
        alt="К весне готовы!"
        width={1296}
        height={385}
      />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}
