import calculatorimg from "../../assets/calculator-img.png";
import { PiClock } from "react-icons/pi";

const BonusBanner = () => {
  return (
    <section className="bonus-banner">
      <article className="bonus-banner-text">
        <h2>Моя система премирования</h2>
        <h1>
          Общебанковская <br /> мотивация
        </h1>
        <div>
          <PiClock />
          <p>Премия выплачивается один раз в год</p>
        </div>
        <span>
          Постановка цели и оценка проводятся один раз в год. А это значит, что
          премия выплачивается тоже один раз в год, весной, ориентировочно в
          конце марта – апреле. Постановка целей обязательна для всех. Оценка –
          один из факторов, влияющих на расчет премии.
        </span>
      </article>
      <img src={calculatorimg} alt="calc-img" />
    </section>
  );
};
export default BonusBanner;
