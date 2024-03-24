import Dropdown from "../../Dropdown";

const BonusServices = () => {
  return (
    <Dropdown text={"Бонусные услуги"}>
      <div className="bonus-services">
        <div className="block">
          <div>
            <h4>Врач в офисе</h4>
            <p>
              Получите квалифицированную медицинскую помощь, воспользовавшись
              услугой «Врач в офисе».
            </p>
            <ul>
              <li>без предварительной записи</li>
              <li>при предъявлении номера полиса ДМС</li>
            </ul>
          </div>
          <a href="">Узнать подробнее</a>
        </div>
        <div className="block">
          <div>
            <h4>Консультация психолога</h4>
            <p>
              Воспользуйтесь дистанционной или очной консультацией специалиста
              для решения любых личных вопросов.
            </p>
            <p>
              Количество консультаций неограничено. Время консультации – до 40
              минут.
            </p>
          </div>
          <a href="">Узнать подробнее</a>
        </div>
        <div className="block">
          <div>
            <h4>Финансовые консультации</h4>
            <p>
              Вы можете получить дистанционную консультацию по финансовым
              вопросам. Консультации проводят практикующие эксперты в области
              финансов.
            </p>
            <p>Количество консультаций неограничено.</p>
          </div>
          <a href="">Узнать подробнее</a>
        </div>

        <div className="block-small">
          <h4>Анализы в «Инвитро»</h4>
          <a href="">Узнать подробнее</a>
        </div>
        <div className="block-small">
          <h4>Телемедицина</h4>
          <a href="">Узнать подробнее</a>
        </div>
        <div className="block-small">
          <h4>Телеветеринария</h4>
          <a href="">Узнать подробнее</a>
        </div>
      </div>
    </Dropdown>
  );
};
export default BonusServices;
