import insuranceImg from "../../assets/insurance-img.png";
import { PiClock } from "react-icons/pi";
import { useSelector } from "react-redux";

const BannerNS = () => {
  const { data } = useSelector((store) => store.dms);

  const isParent = data.find((person) => person.is_parent === true);

  return (
    <>
      <section className="bonus-banner">
        <article className="bonus-banner-text">
          {isParent?.insur_ns !== "" ? (
            <>
              <h1>Договор страхования от несчастных случаев</h1>
              <div>
                <PiClock />
                <p>
                  До 31 марта 2026 услуги предоставляет компания «Капитал LIFE»
                </p>
              </div>
            </>
          ) : (
            <>
              <h1>У вас пока нет договора страхования от несчастных случаев</h1>
              <span>
                Договор страхования жизни от НС доступен для штатных сотрудников
                со степенью занятости не менее 0,5.
              </span>
              <span>
                Прикрепление к программе происходит через 3 месяца работы в
                банке (с 1-го числа следующего месяца после возникновения права
                на пользование услугами НС).
              </span>
            </>
          )}
        </article>

        <img src={insuranceImg} alt="insurance-img" />
      </section>
    </>
  );
};
export default BannerNS;
