import Dropdown from "../../Dropdown";

const InsuranceRelatives = () => {
  return (
    <Dropdown text={"Страхование родственников за счет собственных средств"}>
      <div className="insurance-relatives">
        <p>
          Сотрудникам банка, застрахованным по программе ДМС, также
          предоставляется услуга добровольного медицинского страхования
          родственников (супруги, родители, дети), за счет собственных средств
          застрахованного.
        </p>
        <p>Услуга доступна в течение 90 дней с даты прикрепления к ДМС.</p>

        <a
          href="https://join.bestdoctor.ru/mnbvcxiusglaks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Узнать подробнее
        </a>
      </div>
    </Dropdown>
  );
};
export default InsuranceRelatives;
