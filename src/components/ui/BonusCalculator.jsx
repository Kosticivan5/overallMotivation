import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { toggleCalculator } from "../../features/calculator/calculatorSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ManagersFormula from "./managers/ManagersFormula";
import ManagerCalculator from "./managers/ManagerCalculator";

const BonusCalculator = () => {
  const dispatch = useDispatch();
  const { calculatorOpen } = useSelector((store) => store.calculator);
  return (
    <div className="bonus-calculator">
      <button
        type="button"
        className="info-btn"
        onClick={() => dispatch(toggleCalculator())}
      >
        Калькулятор премии{" "}
        {calculatorOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className={calculatorOpen ? "content open" : "content"}>
        <article>
          {/* <p>
            Для работников, принятых в течение Премируемого периода, расчёт
            производится в соответствии с условиями ниже.
          </p> */}
          <section className="calculator-control">
            {/* <ManagersFormula /> */}
            <ManagerCalculator />
          </section>
        </article>
      </div>
    </div>
  );
};
export default BonusCalculator;
