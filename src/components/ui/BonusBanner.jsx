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
          <p>Премия выплачивается один раз в месяц</p>
        </div>
      </article>
      <img src={calculatorimg} alt="calc-img" />
    </section>
  );
};
export default BonusBanner;
