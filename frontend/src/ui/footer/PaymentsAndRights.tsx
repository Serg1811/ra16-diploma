export default function PaymentsAndRights() {
  return (
    <>
      <section>
        <h5>Принимаем к оплате:</h5>
        <div className="footer-pay">
          <div className="footer-pay-systems footer-pay-systems-paypal" />
          <div className="footer-pay-systems footer-pay-systems-master-card" />
          <div className="footer-pay-systems footer-pay-systems-visa" />
          <div className="footer-pay-systems footer-pay-systems-yandex" />
          <div className="footer-pay-systems footer-pay-systems-webmoney" />
          <div className="footer-pay-systems footer-pay-systems-qiwi" />
        </div>
      </section>
      <section>
        <div className="footer-copyright">
          2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
          аксессуаров. Все права защищены.
          <br />
          Доставка по всей России!
        </div>
      </section>
    </>
  );
}
