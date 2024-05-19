import { ReactNode } from "react";

export default function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="container bg-light footer">
      <div className="row">{children}</div>
    </footer>
  );
}
