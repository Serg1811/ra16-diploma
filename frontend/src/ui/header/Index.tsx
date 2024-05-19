import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="container">
      <div className="row">
        <div className="col">{children}</div>
      </div>
    </header>
  );
}
