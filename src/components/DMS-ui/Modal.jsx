import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../../featuresDMS/dmsSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((store) => store.dms);
  return (
    <aside>
      <div
        onClick={() => dispatch(closeModal())}
        className={isModalOpen ? "modal show" : "modal"}
      ></div>
      <article className={isModalOpen ? "modal-content show" : "modal-content"}>
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
              прикрепление дополнительного города будет оформлено страховщиком с
              1 или 15 числа ближайшего месяца. Новая программа отразится в
              личном кабинете.
            </li>
            <li>
              Если доплата требуется, то заявка перенаправляется страховщику для
              оформления полиса и счета на оплату. После получения заявки,
              страховщик в течение трех рабочих дней направляет счет на оплату
              на указанный в заявке Е-mail.
            </li>
          </ol>
        </article>
        <div className="modal-btns">
          <button onClick={() => dispatch(closeModal())}>Назад</button>
          <a href="mailto:rosbank.ru">
            <button>Подать заявку на подключение</button>
          </a>
        </div>
      </article>
    </aside>
  );
};
export default Modal;
