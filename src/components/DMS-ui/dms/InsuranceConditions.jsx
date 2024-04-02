import Dropdown from "../../Dropdown";
const InsuranceConditions = () => {
  return (
    <Dropdown text={"Условия предоставления полиса для детей"}>
      <article className="insurance-conditions">
        <div>
          <h4>Прикрепление возможно если:</h4>
          <ul>
            <li>Возраст ребенка от 1 до 14 лет (включительно).</li>
            <li>
              Прикрепление детей происходит через 3 месяца или 1 год работы в
              банке (срок определяется в соответствии с{" "}
              <a
                href="https://teamspace.gts.rus.socgen/sites/HRCOMM/_layouts/15/WopiFrame.aspx?sourcedoc=%7b74F6F6CD-41A3-4F3B-BF96-98361004B7A6%7d&file=%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_1.%D0%9A%D1%80%D0%B8%D1%82%D0%B5%D1%80%D0%B8%D0%B8_%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D0%BE%D0%BB%D0%B8%D1%81%D0%B0_%D0%94%D0%9C%D0%A1.docx&action=default"
                target="_blank"
                rel="noopener noreferrer"
              >
                приложением 1
              </a>{" "}
              и{" "}
              <a
                href="https://teamspace.gts.rus.socgen/sites/HRCOMM/_layouts/15/WopiFrame.aspx?sourcedoc=%7b23783F3A-17DD-4615-B76F-890F09B7488D%7d&file=%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%202.1.%200108.docx&action=default"
                target="_blank"
                rel="noopener noreferrer"
              >
                приложением 2.1.
              </a>{" "}
              к Положению о ДМС).
            </li>
          </ul>
        </div>
        <div>
          <h4>Прикрепление возможно если:</h4>
          <p>
            Сотрудники могут прикрепить детей к программе ДМС за счет банка в
            случае, если категория должности сотрудника в кадровой системе
            "руководитель".
          </p>
        </div>
        <div>
          <p>
            Если категория должности в кадровой системе "специалист", то
            программа назначается в зависимости от установленного дохода:
          </p>
          <ul>
            <li>Москва {">"}= 250 000 руб.,</li>
            <li>Санкт-Петербург {">"}= 200 000 руб.,</li>
            <li>Регионы {">"}= 150 000 руб.</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#e40038" }}>
            Страхование детей сотрудников происходит по запросу.{" "}
          </h4>
          <p>
            Для страхования ребенка за счет банка необходимо обратиться на адрес{" "}
            <a href="mailto:dms@rosbank.ru">dms@rosbank.ru</a>
          </p>
        </div>
      </article>
    </Dropdown>
  );
};
export default InsuranceConditions;
