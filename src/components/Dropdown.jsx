import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Dropdown = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="dropdown-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="info-btn"
      >
        {text}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className={isOpen ? "content open" : "content"}>
        <article>{children}</article>
      </div>
    </section>
  );
};
export default Dropdown;
