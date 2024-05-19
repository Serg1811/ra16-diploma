import dynamic from "next/dynamic";

const Order = dynamic(() => import("@/ui/cart/Order"), { ssr: false });

export default function CartPage() {
  return <Order />;
}
