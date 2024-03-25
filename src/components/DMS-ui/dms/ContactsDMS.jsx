import Dropdown from "../../Dropdown";

const ContactsDMS = () => {
  return (
    <Dropdown text={"Контакты"}>
      <article className="contacts">
        <p>
          Медицинское сопровождение осуществляется 24 часа в сутки, 7 дней в
          неделю.{" "}
        </p>
        <p>
          Во всех случаях ухудшения самочувствия или в случаях острого состояния
          Вы можете обратиться в круглосуточную медицинскую службу СПАО
          «Ингосстрах».
        </p>

        <div className="contacts-info">
          <div className="contact-txt">
            <h4>Круглосуточно</h4>
          </div>
          <div className="contact">
            <div className="phone">8-800-707-19-47</div>
            <p>Контакт-центр</p>
            <div className="phone">8-800-707-19-47</div>
            <p>
              Линия информационной поддержки по <br />
              COVID-19
            </p>
          </div>
          <div className="contact-txt">
            <h4>Понедельник - Пятница</h4>
            <h4>9.00 - 18.00</h4>
          </div>
          <div className="contact">
            <h4>Врач-куратор – Гребенщикова Нина Владимировна</h4>
            <span>Для решения сложных вопросов</span>
            <div className="phone">+7 963 976 55 37</div>
            <div className="phone">
              <a href="mailto:Nina.Grebenschikova@ingos.ru">
                Nina.Grebenschikova@ingos.ru
              </a>
            </div>
            <h4>К врачу-куратору следует обращаться по следующим вопросам:</h4>
            <ul>
              <li>
                Оформление гарантийных писем по ведению беременности и
                родовспоможению (в соответствии с Программой страхования);
              </li>
              <li>
                Организация реабилитационно-восстановительного лечения (в
                соответствии с Программой страхования);
              </li>
              <li>
                Перевод госпитализированного Застрахованного из одного
                стационара в другой в случае невозможности оказания в полном
                объеме медицинской помощи по диагнозу;
              </li>
              <li>
                Требуется помощь страховой компании в случае длительного
                неэффективного лечения какого-либо заболевания;
              </li>
              <li>
                Требуется помощь страховой компании в случае длительного
                неэффективного лечения какого-либо заболевания;
              </li>
              <li>
                Сложные случаи, выходящие за рамки стандартного согласования и
                организации медицинской помощи.
              </li>
            </ul>
          </div>
          <div className="contact-txt">
            <h4>Дополнительная почта</h4>
            <h4>для обращений</h4>
          </div>
          <div className="contact">
            <div className="phone">
              <a href="mailto:rb-fa@ingos.ru">rb-fa@ingos.ru</a>
            </div>
            <p>Для родственников</p>
            <div className="phone">
              <a href="mailto:rb-travel@ingos.ru">rb-travel@ingos.ru</a>
            </div>
            <p>Для ВЗР (полис путешественника)</p>
            <div className="phone">
              <a href="mailto:dms@rosbank.ru">dms@rosbank.ru</a>
            </div>
            <p>Управление компенсаций и льгот</p>
          </div>
        </div>
      </article>
    </Dropdown>
  );
};
export default ContactsDMS;
