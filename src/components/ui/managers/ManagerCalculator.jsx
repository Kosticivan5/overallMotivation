import Fields from "./Fields";
import percentImg from "../../../assets/discount-circle.svg";
import { PiWarningFill } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateTotal,
  updateState,
  getPercentage,
} from "../../../features/calculator/managersCalculatorSlice";
import { useEffect } from "react";

const ManagerCalculator = () => {
  const dispatch = useDispatch();

  const { total, percentage } = useSelector((store) => store.managerCalculator);

  useEffect(() => {
    dispatch(getPercentage(15));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const states = Object.fromEntries(data.entries());

    dispatch(updateState(states));
    dispatch(calculateTotal());
  };

  return (
    <section>
      <div>
        <p>
          С помощью калькулятора Вы можете смоделировать премию при разных
          результатах банка/бизнес-линии.
        </p>
        <p>
          Финальный размер премии определяется руководителем на основе
          индивидуальных результатов сотрудника.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="calculator">
          <Fields />
          {/* result */}
          <div className="result">
            <img src={percentImg} alt="percent-img" />
            <span>Ваш процент премирования</span>
            <p className="percent">{percentage}%</p>
            <div className="hr"></div>
            <span>Сумма расчетной премии</span>
            <div className="sum">
              <h2> {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h2>
              <h2>&#8381;</h2>
            </div>
          </div>
        </div>
        <button className="total-button" type="submit">
          Рассчитать премию
        </button>
        <div className="warning">
          <PiWarningFill />
          <div>
            <span>
              Процент премирования является индикативным, зависит от
              подразделения и должности
            </span>
            <span>
              Сумма расчетной премии не является точной. Фактическая премия
              рассчитывается с учетом отсутствий на работе, изменений оклада в
              течение года, фактического конверта домена и оценки руководителя
            </span>
          </div>
        </div>
      </form>
    </section>
  );
};
export default ManagerCalculator;
