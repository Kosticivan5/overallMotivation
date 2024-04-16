import Dropdown from "../../Dropdown";

const InsuranceCauses = () => {
  return (
    <Dropdown text={"Страховые события"}>
      <article className="ns-info">
        <h4>
          Страховые выплаты предоставляют при наступлении следующих событий:
        </h4>
        <ul>
          <li>Смерть в результате несчастного случая или болезни;</li>
          <li>
            Получение инвалидности (I, II, III группы в результате несчастного
            случая);
          </li>
          <li>Получение травмы;</li>
          <li>
            Однократное извлечение клеща в сочетании с экстренной
            иммунопрофилактикой.
          </li>
        </ul>
        <a href="/download_file.html?file_id=7015429159515814510" download>
          Узнать подробнее о процессе получения страховых выплат
        </a>
      </article>
    </Dropdown>
  );
};
export default InsuranceCauses;
