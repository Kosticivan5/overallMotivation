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
        <a className="faq-content-file-link" href="/download_file.html?file_id=7010832281905396898" download>
            Памятка с ответами на частые вопросы
        </a>
    </section>
  );
};
export default Dropdown;
