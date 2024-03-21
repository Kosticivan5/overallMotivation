import { MdCurrencyRuble } from "react-icons/md";
import { useSelector } from "react-redux";
import Field from "../Field";

const Fields = () => {
  const { percentage } = useSelector((store) => store.managerCalculator);
  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
    let formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Add spaces every 3 digits
    // Remove leading zeros, except for single zero
    formattedValue = formattedValue.replace(/^0+(?=\d)/, "");
    e.target.value = formattedValue || ""; // Set the input value or empty string
  };

  return (
    <>
      <Field
        type="text"
        title={"Оклад"}
        tooltipText={"Средний в течение года (если менялся)"}
        name={"salary"}
        min={0}
        placeholder={0}
        icon={<MdCurrencyRuble />}
        onchange={handleInputChange}
      />
      <Field
        type="number"
        title={"Мультипликатор банка"}
        tooltipText={"от 0,5 до 1,4"}
        name={"bankMulti"}
        min={0.5}
        max={1.4}
        step={0.05}
        placeholder={1}
        defaultValue={1}
      />
      {/* <Field
        type="number"
        title={"Ваш процент премирования"}
        tooltipText={"Фиксированное значение для вашей должности"}
        name={"percentage"}
        placeholder={percentage}
        disabled={true}
        icon={"%"}
      /> */}
      <Field
        type="number"
        title={"Мультипликатор бизнес-линии"}
        tooltipText={"от 0,5 до 1,4"}
        name={"bizMulti"}
        placeholder={1}
        min={0.5}
        max={1.4}
        step={0.05}
        defaultValue={1}
      />
      <Field
        type="number"
        title={"Кол-во отработанных месяцев в течение года"}
        tooltipText={
          "Премию получают сотрудники, принятие не позднее 1 рабочего дня августа и продолжающие работать на момент выплаты премии"
        }
        name={"months"}
        placeholder={12}
        min={1}
        max={12}
        defaultValue={12}
      />
    </>
  );
};
export default Fields;
