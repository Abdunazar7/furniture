import React from "react";
import v from "../assets/vector.png";
import cs from "./ShoppingAnd.module.css";


function ShoppingAnd() {
  return (
    <div className={cs.main}>
      <p className={cs.p}>
        <span>Главная </span>
        <img src={v} alt="image vektor" />
        <span>Доставка и оплата</span>
      </p>
      <div className={cs.wrapper}>
        <div className={cs.left}>
          <h1>Доставка и оплата</h1>
        </div>
        <div className={cs.right}>
          <div>
            <h3>Доставка</h3>
            <p>
              Мы осуществляем доставку со склада по Москве и Московской области
              собственной курьерской службой. Транспортными компаниями нашу
              продукцию мы доставляем по всей территории РФ, а так же по всем
              странам СНГ. Сроки доставки: 4—6 недель
            </p>
          </div>
          <div>
            <h3>Курьерская доставка</h3>
            <p>
              БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы
              свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от
              МКАД
            </p>
          </div>
          <div>
            <h3>Самовывоз</h3>
            <p>
              Любой заказ можно забрать самостоятельно по адресу: г.
              Москва, Дмитровское шоссе д.100с2
            </p>
          </div>
        </div>
      </div>
      <div className={cs.block}>
        <div className={cs.mapcontainer}>
          <a
            href="https://yandex.uz/maps/org/94800077397/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Najot Ta'lim
          </a>

          <a
            href="https://yandex.uz/maps/10335/tashkent/category/educational_center/184106168/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            O‘quv markazi Toshkentda
          </a>

          <a
            href="https://yandex.uz/maps/10335/tashkent/category/computer_courses/184106158/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "28px",
            }}
          >
            Kompyuter kurslari Toshkentda
          </a>

          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.203681%2C41.285823&mode=poi&poi%5Bpoint%5D=69.203494%2C41.285779&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D94800077397&z=18.6"
            width="560"
            height="400"
            frameBorder="1"
            allowFullScreen={true}
            style={{ position: "relative" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ShoppingAnd;
