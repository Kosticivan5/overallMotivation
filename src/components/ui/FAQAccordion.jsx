import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAccordion } from "../../features/q&a/accordionSlice";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FAQAccordion = ({ id, question, answer }) => {
  const dispatch = useDispatch();
  const { openedAccordionIds } = useSelector((store) => store.accordion);

  const isAccordionOpen = openedAccordionIds.includes(id);

  const handleClick = () => {
    dispatch(toggleAccordion(id));
  };

  return (
    <div onClick={handleClick} className="accordion">
      <div type="button" className="faq-btn">
        <span>{question}</span>
        {isAccordionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div className={isAccordionOpen ? "answer open" : "answer"}>
        {
          <article>
            <p>{answer}</p>
          </article>
        }
      </div>
    </div>
  );
};

export default FAQAccordion;
