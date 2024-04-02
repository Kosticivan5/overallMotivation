import Dropdown from "../../Dropdown";

const InsuranceRelatives = () => {
  return (
    <Dropdown text={"Страхование родственников за счет собственных средств"}>
      <div className="insurance-relatives">
        <p>
          Сотрудникам банка, застрахованным по программе ДМС, также предоставляется услуга добровольного медицинского
          страхования родственников (супруги, родители, дети), за счет собственных средств застрахованного.
        </p>
        <p>Услуга доступна в течение 90 дней с даты прикрепления к ДМС.</p>

        {/* <a href="https://join.bestdoctor.ru/mnbvcxiusglaks" target="_blank" rel="noopener noreferrer"> */}
        <a href="https://join.bestdoctor.ru/family_insurance_" target="_blank" rel="noopener noreferrer">
          Узнать подробнее
        </a>
        <p>
          * Если ссылка на сайт BestDoctor не открывается с рабочего компьютера, перешлите ее на личное устройство для
          просмотра
        </p>
      </div>
    </Dropdown>
  );
};
export default InsuranceRelatives;
