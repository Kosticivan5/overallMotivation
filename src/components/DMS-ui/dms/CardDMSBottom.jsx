import TooltipIcon from "../../ui/TooltipIcon";
import { BsInfoCircleFill } from "react-icons/bs";

const CardDMSBottom = ({ person }) => {
  const { insurance_program, related_insurance_program } = person;
  return (
    <div className="dms-card-bottom">
      <article className="insurance-program-info">
        <div>
          <h5>Программа страхования</h5>
          <p>{insurance_program}</p>
        </div>
        <div>
          <div>
            <h5>Смежная программа страхования</h5>
            <TooltipIcon
              text={
                "В рамках полиса ДМС возможно расширить территорию страхования дополнительными городами обслуживания"
              }
            >
              <BsInfoCircleFill />
            </TooltipIcon>
          </div>
          {related_insurance_program.length > 0 || (
            <button className="register" type="button">
              Подключить
            </button>
          )}
        </div>
        <a href="">Перечень медицинских услуг</a>
        <a href="">Перечень медицинских учреждений</a>
        {related_insurance_program.length > 0 && (
          <a href="">Перечень медицинских учреждений по смежной программе</a>
        )}
      </article>
      <div className="dropdowns"></div>
    </div>
  );
};
export default CardDMSBottom;
