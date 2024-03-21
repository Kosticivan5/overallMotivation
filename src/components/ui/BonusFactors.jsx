import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleFactors } from "../../features/factors/factorsSlice";

const BonusFactors = () => {
  const dispatch = useDispatch();
  const { factorsOpen } = useSelector((store) => store.factors);

  return (
    <div className="bonus-factors">
      <button
        type="button"
        className="info-btn"
        onClick={() => dispatch(toggleFactors())}
      >
        Факторы, влияющие на размер премии
        {factorsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className={factorsOpen ? "content open" : "content"}>
        <article>
          <ul>
            <li>
              Мультипликатор банка (зависит от финансовых результатов всего
              банка за год)
            </li>
            <li>
              Мультипликатор бизнес-линии ( у поддерживающих функций всегда = 1,
              у бизнес-функций зависит от выполнения плана и
              бизнес-результатов). Мультипликаторы можно{" "}
              <a
                href="https://vmeste.rosbank.rus.socgen/sites/rosbank/pages/kpi"
                target="_blank"
                rel="noopener noreferrer"
              >
                посмотреть здесь.
              </a>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};
export default BonusFactors;
