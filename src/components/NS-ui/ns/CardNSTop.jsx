import nsQr from "../../../assets/qr-ns.svg";

const CardNSTop = ({ name }) => {
  return (
    <div className="card-top">
      <div className="card-top-info">
        <p className="flag">Мой договор страхования</p>

        <h2>{name}</h2>
        <div className="insurance-info">
          <div>
            Номер договора: <span>0326042024</span>
          </div>
        </div>
      </div>
      <div className="card-top-qr">
        <img src={nsQr} alt="qr-registration" />
        <a
          href="https://lk.kaplife.ru/life_cabinet/Account/Logon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Личный кабинет Капитал LIFE
        </a>
      </div>
    </div>
  );
};
export default CardNSTop;
