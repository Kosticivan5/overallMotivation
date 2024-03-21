import dmsImage from "../../assets/dms-img.png";
import { PiClock } from "react-icons/pi";

const BannerDMS = () => {
  return (
    <>
      <section className="bonus-banner">
        <article className="bonus-banner-text">
          <h1>Полис добровольного медицинского страхования</h1>
          <div>
            <PiClock />
            <p>До 31 марта 2024 услуги предоставляет СПАО «Ингосстрах»</p>
          </div>
        </article>

        <img src={dmsImage} alt="calc-img" />
      </section>
    </>
  );
};
export default BannerDMS;
