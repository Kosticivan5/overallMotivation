import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleFaq } from "../../features/q&a/faqSlice";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.faq);

  return (
    <div className="faq">
      <button
        type="button"
        className="info-btn"
        onClick={() => dispatch(toggleFaq())}
      >
        FAQ {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className={isOpen ? "faq-content open" : "faq-content"}>
        <article>
          <FAQAccordion
            id={1}
            question="Дата приема для годового премирования"
            answer={
              "Годовую премию получают сотрудники, принятые до первого рабочего дня августа включительно."
            }
          />
          <FAQAccordion
            id={2}
            question="Премирование в случае увольнения"
            answer="Премированию подлежат только сотрудники банка, состоящие с банком в трудовых отношениях на дату выплаты."
          />

          <FAQAccordion
            id={3}
            question="Премирование декретниц"
            answer="Премирование сотрудников производится в соответствии с пройденной оценкой и пропорционально отработанному времени."
          />
          <FAQAccordion
            id={4}
            question="Сроки выплаты премии"
            answer="Годовая премия традиционно выплачивается в конце марта – апреле."
          />
        </article>
      </div>
    </div>
  );
};
export default FAQ;
