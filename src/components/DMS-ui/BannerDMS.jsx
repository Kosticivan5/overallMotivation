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
                <p>
                  До 31 марта 2026 услуги предоставляет компания{" "}
                  <a
                    href="/download_file.html?file_id=7010402116185286492"
                    download
                  >
                    «BestDoctor»
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <h1>
                У Вас пока нет полиса добровольного медицинского страхования
              </h1>
              <span>
                Полис ДМС доступен для штатных сотрудников со степенью занятости
                не менее 0,5. Прикрепление к программе происходит через 3 месяца
                работы в банке (с 1-го числа следующего месяца после
                возникновения права на пользование услугами ДМС).
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
