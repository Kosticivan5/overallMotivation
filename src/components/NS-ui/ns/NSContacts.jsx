import Dropdown from "../../Dropdown";

const NSContacts = () => {
  return (
    <Dropdown text={"Контакты"}>
      <article className="contacts">
        <div className="contacts-info info-gap">
          <div className="contact-txt">
            <h4>По всем вопросам программы страхования</h4>
            <p>
              Оксана Бочарова <br /> 9.00 - 18.00 по Мск
            </p>
          </div>
          <div className="contact">
            <div className="phone">
              <a href="mailto:Oksana_Bocharova@kaplife.ru">
                Oksana_Bocharova@kaplife.ru
              </a>
            </div>
            <br />
            <div className="phone-inline">
              <div className="phone">8(495)-980-7-980</div>
              <span>доб. 099-1722</span>
            </div>
          </div>
          <div className="contact-txt">
            <h4>Куратор по урегулированию страховых событий</h4>
            <p>
              Елизавета Ларионова <br /> 9.00 - 18.00 по Мск
            </p>
          </div>
          <div className="contact">
            <div className="phone-inline">
              <div className="phone">
                <a href="mailto:Elizaveta_Larionova@kaplife.ru">
                  Elizaveta_Larionova@kaplife.ru
                </a>
              </div>
              <div className="phone">
                <a href="mailto:region_life@kaplife.ru">
                  region_life@kaplife.ru
                </a>
              </div>
            </div>
            <br />

            <div className="phone-inline">
              <div className="phone">8(495)-980-7-980</div>
              <span>доб. 099-1869</span>
            </div>
          </div>
          <div className="contact-txt">
            <h4>Контакт-центр КАПИТАЛ LIFE</h4>
            <p>
              Если Вам необходима помощь <br /> в процессе получения страховой
              выплаты
            </p>
          </div>
          <div className="contact">
            <div className="phone">8-800-200-68-86</div>
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
