import dmsQr from "../../../assets/dms-qr.png";
import TooltipIcon from "../../ui/TooltipIcon";
import { BsInfoCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const CardDMSTop = ({ person }) => {
  const { is_parent, name, insurance_number, patient_id } = person;
  return (
    <div className="dms-card-top">
      <div className="card-top-info">
        {is_parent ? (
          <p className="flag">Мой полис ДМС</p>
        ) : (
          <p className="flag">Полис моего ребёнка</p>
        )}
        <h2>{name}</h2>
        <div className="insurance-info">
          <div>
            Номер полиса: <span>{insurance_number}</span>
          </div>
          <div>
            ID: <span>{patient_id}</span>
            <TooltipIcon
              text={
                "Используйте ID пациента, чтобы авторизоваться в Личном кабинете застрахованного"
              }
            >
              <BsInfoCircleFill />
            </TooltipIcon>
          </div>
        </div>
      </div>
      <div className="card-top-qr">
        <img src={dmsQr} alt="qr-registration" />
        <a
          href="https://my.bestdoctor.ru/login/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Личный кабинет BestDoctor
        </a>
      </div>
    </div>
  );
};
export default CardDMSTop;
