import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="navbar-brand" href="/">
      <Image
        src="/img/header-logo.png"
        alt="Bosa Noga"
        width={184}
        height={59}
      />
    </Link>
  );
}
