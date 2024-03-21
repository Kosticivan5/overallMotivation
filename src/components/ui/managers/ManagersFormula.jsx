import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { PiWarningFill } from "react-icons/pi";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import TooltipIcon from "../TooltipIcon";
import { toggleFormula } from "../../../features/formula/formulaSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ManagersFormula = () => {
  const dispatch = useDispatch();
  const { formulaOpen } = useSelector((store) => store.formula);

  return (
    <section className="formula-container">
      <button
        type="button"
        className="info-btn"
        onClick={() => dispatch(toggleFormula())}
      >
        Формула расчета
        {formulaOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className={formulaOpen ? "content open" : "content"}>
        <article>
          <div className="calc-formula">
            <div className="chips">
              Сумма целевых премий <br /> сотрудников подразделения
              <TooltipIcon
                text={"Сумма по сотрудникам бизнес-линии / подразделения"}
              >
                <BsInfoCircleFill />
              </TooltipIcon>
            </div>
            <span>x</span>
            <div className="chips">
              Мультипликатор <br /> банка
            </div>
            <span>x</span>
            <div className="chips">
              Мультипликатор <br /> бизнес-линии{" "}
            </div>
            <span>x</span>
            <div className="chips">
              Премиальный фонд ЧП {"->"}
              <br /> руководителя подразделения{" "}
            </div>
            <span>=</span>
            <div className="chips">
              Индивидуальная премия на <br /> основе личных результатов{" "}
              <TooltipIcon
                text={
                  "За счет перераспределения средств премия может быть в 2 раза выше, чем расчетная"
                }
              >
                <BsInfoCircleFill />
              </TooltipIcon>
            </div>
          </div>
          <div className="calc-formula">
            <div className="chips">Целевая премия</div>
            <span>=</span>
            <div className="chips">
              Доход за период
              <TooltipIcon
                text={
                  "Сумма окладов, административной премии (если применимо), РК и ПН (если применимо) за отработанный год"
                }
              >
                <BsInfoCircleFill />
              </TooltipIcon>
            </div>
            <span>x</span>
            <div className="chips">
              Процент премирования{" "}
              <TooltipIcon text={"Фиксированное значение для вашей должности"}>
                <BsInfoCircleFill />
              </TooltipIcon>
            </div>
          </div>
          <span>
            <PiWarningFill />
            Индивидуальная премия сотрудника может быть не равна целевой в
            зависимости от результатов банка, бизнес-линии и личных достижений
            сотрудника
          </span>
        </article>
      </div>
    </section>
  );
};
export default ManagersFormula;
