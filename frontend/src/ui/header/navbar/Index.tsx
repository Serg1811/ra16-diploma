import dynamic from "next/dynamic";
import NavLinks from "@/ui/header/navbar/NavLinks";
import Logo from "@/ui/header/navbar/Logo";

const SearchFormAndCart = dynamic(
  () => import("@/ui/header/navbar/SearchFormAndCart"),
  { ssr: false },
);

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Logo />
      <div className="collapse navbar-collapse" id="navbarMain">
        <NavLinks />
        <SearchFormAndCart />
      </div>
    </nav>
  );
}
