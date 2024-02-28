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
          <span>Подробнее о расчете премии можете узнать ниже.</span>
          <div className="content-question">
            <p>
              Каждый сотрудник вносит свой вклад в достижение финансовых целей
              банка ежедневно!
            </p>
            <p>
              Более подробно и с примерами система мотивации описана в{" "}
              <a
                href="https://videohosting.gts.rus.socgen/VideoLibrary/Forms/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/videoplayerpage.aspx?ID=2897&FolderCTID=0x0120D520A808008F1FF932D9490148BF9D47F809781B09&List=6ec44046-a272-4c71-8393-171185d7fc20&RootFolder=%2FVideoLibrary%2F%D0%9E%D0%B1%D1%89%D0%B5%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%2FAdditional%20Content&RecSrc=%2FVideoLibrary%2F%D0%9E%D0%B1%D1%89%D0%B5%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F"
                target="_blank"
                rel="noopener noreferrer"
              >
                видео
              </a>{" "}
              (длительность: 7 минут 45 секунд)
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
export default BonusFactors;
