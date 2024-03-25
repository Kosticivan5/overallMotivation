import dmsImage from "../../assets/dms-img.png";
import { PiClock } from "react-icons/pi";
import { useSelector } from "react-redux";

const BannerDMS = () => {
  const { data } = useSelector((store) => store.dms);

  const parentInsured = data.find((person) => person.is_parent === true);

  return (
    <>
      <section className="bonus-banner">
        <article className="bonus-banner-text">
          {parentInsured ? (
            <>
              <h1>Полис добровольного медицинского страхования</h1>
              <div>
                <PiClock />
                <p>До 31 марта 2024 услуги предоставляет СПАО «Ингосстрах»</p>
              </div>
            </>
          ) : (
            <>
              <h1>
                У вас пока нет полиса добровольного медицинского страхования
              </h1>
              <span>
                Страхование по ДМС не предусмотено на время испытательного срока
                или при работе на ставке ниже 0.5.
              </span>
              <span>
                В случае вопросов обратитесь в Управленеи компенсаций и льгот.
              </span>
            </>
          )}
        </article>

        <img src={dmsImage} alt="calc-img" />
      </section>
    </>
  );
};
export default BannerDMS;
