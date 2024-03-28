import { closeModal } from "../../../featuresDMS/dmsSlice";
import { useDispatch } from "react-redux";

const ApplicationModalContent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Смежная программа ДМС</h2>
      <article>
        <p>
          «Смежный город» — комбинированный вариант программы страхования, в
          котором в качестве территории страхования заявлено два и более
          городов.
        </p>
        <p>
          Для оформления комбинированной программы страхования обратитесь в
          Управление компенсаций и льгот, отправив заявку на подключение.
        </p>
        <p>
          Сотрудники Управления компенсаций и льгот на основании заявки
          определят необходимость доплаты:
        </p>
        <ol>
          <li>
            Если доплата не требуется, то запрос принимается в работу и
            прикрепление дополнительного города будет оформлено страховщиком с 1
            или 15 числа ближайшего месяца. Новая программа отразится в личном
            кабинете.
          </li>
          <li>
            Если доплата требуется, то заявка перенаправляется страховщику для
            оформления полиса и счета на оплату. После получения заявки,
            страховщик в течение трех рабочих дней направляет счет на оплату на
            указанный в заявке Е-mail.
          </li>
        </ol>
      </article>
      <div className="modal-btns">
        <button onClick={() => dispatch(closeModal())}>Назад</button>
        <a href="mailto:DMS@rosbank.ru?subject=Подключение смежной программы страхования&body=Для%20оформления%20комбинированной%20программы%20страхования%20укажите%20персональные%20данные%20и%20отправьте%20письмо.%0A%0AФИО:%0AДата%20рождения:%0AГород,%20который%20хотите%20добавить:%0A%0A%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B5%D0%BD%D1%81%D0%B0%D1%86%D0%B8%D0%B9%20%D0%B8%20%D0%BB%D1%8C%D0%B3%D0%BE%D1%82%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B8%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D1%82%20%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%8B.">
          <button>Подать заявку на подключение</button>
        </a>
      </div>
    </>
  );
};
export default ApplicationModalContent;
