import Dropdown from "../../Dropdown";

const TravelingInsurance = () => {
  return (
    <Dropdown text={"Полис ВЗР"}>
      <div className="travel-insurance">
        <p>
          Застрахованным по ДМС сотрудникам и застрахованным по ДМС детям
          предоставляется возможность личного страхования (за счёт банка) в
          период путешествий по всему миру.
        </p>
        <h4>Для оформления полиса путешественника необходимо:</h4>
        <ul>
          <li>
            Заполнить{" "}
            <a
              href="https://teamspace.gts.rus.socgen/sites/HRCOMM/_layouts/15/WopiFrame.aspx?sourcedoc=%7b395526CB-53C1-46B2-96E9-04670E0B26A3%7d&file=%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0%20%D0%92%D0%97%D0%A0.xlsx&action=default"
              target="_blank"
              rel="noopener noreferrer"
            >
              заявку
            </a>{" "}
          </li>
          <li>
            Отправить заявку на ящик{" "}
            <a href="mailto:rb-travel@ingos.ru">rb-travel@ingos.ru</a>
          </li>
          <li>
            В течение 4-х рабочих дней полис появится в личном кабинете
            застрахованного
          </li>
        </ul>
        <a href="">Скачать памятку</a>
      </div>
    </Dropdown>
  );
};
export default TravelingInsurance;
