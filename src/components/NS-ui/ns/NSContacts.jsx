import Dropdown from "../../Dropdown";

const NSContacts = () => {
  return (
    <Dropdown text={"Контакты"}>
      <article className="contacts">
        <div className="contacts-info">
          <div className="contact-txt">
            <h4>Выделенный телефонный номер и почта для Застрахованных</h4>
          </div>
          <div className="contact">
            <div className="phone">8-800-101-19-47</div>

            <div className="phone">
              <a href="mailto:rosbankDMS@bestdoctor.ru">
                rosbankDMS@bestdoctor.ru
              </a>
            </div>
          </div>
          <div className="contact-txt">
            <h4>Врач-куратор – Кетова Елена</h4>
          </div>
          <div className="contact">
            <div className="phone">
              <a href="mailto:e.ketova@bestdoctor.ru">e.ketova@bestdoctor.ru</a>
            </div>
            <h4>К врачу-куратору следует обращаться по следующим вопросам:</h4>
            <ul>
              <li>
                Организация высокотехнологичной медицинской помощи в сложных
                случаях
              </li>
              <li>Организация плановых госпитализаций, сложных консультаций</li>
              <li>
                Курирование застрахованного в стационаре, контроль лечения
              </li>
              <li>Разбор претензий, застрахованных по программе страхования</li>
            </ul>
          </div>
          <div className="contact-txt">
            <h4>
              По другим вопросам можно обращаться в Управление компенсаций и
              льгот
            </h4>
          </div>
          <div className="contact">
            <div className="phone">
              <a href="mailto:dms@rosbank.ru">dms@rosbank.ru</a>
            </div>
          </div>
        </div>
      </article>
    </Dropdown>
  );
};
export default NSContacts;
