import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import type { Metadata } from "next";
import Header from "@/ui/header/Index";
import NavBar from "@/ui/header/navbar/Index";
import { ReactNode } from "react";
import Footer from "@/ui/footer/Index";
import FooterNav from "@/ui/footer/FooterNav";
import PaymentsAndRights from "@/ui/footer/PaymentsAndRights";
import Contacts from "@/ui/footer/Contacts";
import StoreProvider from "@/app/StoreProvider";

export const metadata: Metadata = {
  title: "Обувной магазин Bosa Noga",
  description: "Быстрая доставка обуви в Москве и Московской области",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Header>
            <NavBar />
          </Header>
          <main className="container">
            <div className="row">
              <div className="col">{children}</div>
            </div>
          </main>
          <Footer>
            <div className="col">
              <FooterNav />
            </div>
            <div className="col">
              <PaymentsAndRights />
            </div>
            <div className="col text-right" style={{ textAlign: "right" }}>
              <Contacts />
            </div>
          </Footer>
        </body>
      </StoreProvider>
    </html>
  );
}
