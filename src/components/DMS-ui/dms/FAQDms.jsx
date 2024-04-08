import Dropdown from "../../Dropdown";
import FAQAccordion from "../../ui/FAQAccordion";
import { useSelector } from "react-redux";
import { faqItemsDms } from "../../../../questionsAnswers";
import { faqItemsNoDms } from "../../../../questionsAnswers";

const FAQDms = () => {
  const { data } = useSelector((store) => store.dms);

  const parent = data.find((person) => person.is_parent === true);

  // return parent ? (

  return parent ? (
    <Dropdown text={"FAQ"}>
      {faqItemsDms.map((item) => {
        const { id, question, answer } = item;
        const newAnswer = <span dangerouslySetInnerHTML={{ __html: answer }} />;
        return <FAQAccordion key={id} id={id} question={question} answer={newAnswer} />;
      })}
      <a className="faq-content-file-link" href="/download_file.html?file_id=7010832281905396898" download>
        Памятка с ответами на частые вопросы
      </a>
    </Dropdown>
  ) : (
    <Dropdown text={"FAQ"}>
      {faqItemsNoDms.map((item) => {
        const { id, question, answer } = item;
        const newAnswer = <span dangerouslySetInnerHTML={{ __html: answer }} />;
        return <FAQAccordion key={id} id={id} question={question} answer={newAnswer} />;
      })}
      <a className="faq-content-file-link" href="/download_file.html?file_id=7010832281905396898" download>
        Памятка с ответами на частые вопросы
      </a>
    </Dropdown>
  );
};
export default FAQDms;
