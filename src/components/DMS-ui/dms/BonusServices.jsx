import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../Dropdown";
import { openDoctorModal } from "../../../featuresDMS/dmsSlice";

const BonusServices = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.dms);
  const parent = data.find((person) => person.is_parent === true);

  return (
    <Dropdown text={"Бонусные услуги"}>
      <>
        <div className="bonus-services">
          {parent.office_doctor && (
            <div className="block">
              <div>
                <h4>Врач в офисе</h4>
                <p>Получите квалифицированную медицинскую помощь, воспользовавшись услугой «Врач в офисе».</p>
                <ul>
                  <li>без предварительной записи</li>
                  <li>при предъявлении номера полиса ДМС</li>
                </ul>
              </div>
              <button onClick={() => dispatch(openDoctorModal())}>Ознакомиться с графиками</button>
            </div>
          )}

          <div className="block">
            <div>
              <h4>Юридические и финансовые консультации от сервиса «Правокард»</h4>
              <p>
                Вы можете получить юридические консультации по всем отраслям права, кроме предпринимательской
                деятельности, трудового и уголовного права. Также вам доступны консультации по финансовым вопросам.
              </p>
              <p>Консультации доступны с 8:00 до 23:00 (по Москве) по телефону 8-800-555-33-26</p>
              <p>Количество консультаций неограничено.</p>
            </div>
          </div>
          <div className="block">
            <div>
              <h4>Горячая линия психологической поддержки</h4>
              <p>
                Вы можете обратиться за экстренной помощью психолога и обсудить со специалистом любую проблему: от
                личностного роста и повышенной тревожности до конфликта с родителями или коллегами.
              </p>
              <p>Время работы линии: с 9:00 до 21:00 (по Москве).</p>
              <p>
                Чтобы получить услугу, позвоните по телефону <br /> 8-800-555-71-76 или напишите в чат Службы заботы в
                мобильном приложении BestDoctor.
              </p>
            </div>
          </div>
          <div className="block">
            <div>
              <h4>Анализы в лабораториях ИНВИТРО</h4>
              <p>
                Сдать анализы, назначенные врачом, можно в ближайшей лаборатории ИНВИТРО рядом с домом или по пути на
                работу.{" "}
              </p>
              <p>
                Чтобы получить услугу, напишите в чат приложения BestDoctor. Мы направим гарантийное письмо в
                лабораторию.
              </p>
            </div>
          </div>
          <div className="block">
            <div>
              <h4>Консультации ветеринара</h4>
              <p>
                В рамках единого сервиса BestDoctor доступны консультации с ветеринаром по вопросам здоровья ваших
                питомцев и ухода за ними.
              </p>
              <p>
                Ветеринар ответит на вопросы об уходе, инфекциях и болезнях, кормлении и даст рекомендации <br /> по
                поведению вашего питомца.
              </p>
              <p>Для записи на консультацию напишите в чат мобильного приложения BestDoctor.</p>
              <p>Количество консультаций неограничено.</p>
            </div>
          </div>
          <div className="block">
            <div>
              <h4>Чекап на базе клиник ИНВИТРО для всех регионов России</h4>
              <p>Пройдите комплекс из 19 самых важных показателей для общей оценки состояния организма.</p>
              <p>
                Чекап включает онлайн-консультацию терапевта: врач расшифровывает анализы и дает рекомендации по
                поддержанию состояния здоровья.
              </p>
              <p>
                <span>
                  Вы сможете пройти чекап <br /> в течение одного месяца после прикрепления к ДМС.{" "}
                </span>{" "}
                Для записи напишите в чат BestDoctor или обратитесь по номеру <br />8 (800) 101-19-47.
              </p>
            </div>
          </div>
          <div className="block">
            <div>
              <h4>Сбор корзины лекарств в онлайн-аптеке POLZAru</h4>
              <p>
                После консультации с врачом Виртуальной клиники напишите в чат BestDoctor, если вам нужна помощь <br />{" "}
                с заказом лекарств. Оператор подберет удобную аптеку, проверит наличие лекарств и поможет собрать
                корзину на сайте партнера POLZAru <br /> с экономией до 10%.
              </p>
            </div>
          </div>
        </div>
        <a href="/download_file.html?file_id=7013326011609642441" download>
          Дополнительные возможности ДМС
        </a>
        <a href="/download_file.html?file_id=7010402389831677237" download>
          Предложения от партнёров BestDoctor
        </a>
      </>
    </Dropdown>
  );
};
export default BonusServices;
