import TooltipIcon from "../../ui/TooltipIcon";
import { BsInfoCircleFill } from "react-icons/bs";
import { openModal } from "../../../featuresDMS/dmsSlice";
import { useDispatch } from "react-redux";
import BonusServices from "./BonusServices";
import TravelingInsurance from "./TravelingInsurance";
import InsuranceConditions from "./InsuranceConditions";

const CardDMSBottom = ({ person }) => {
  const dispatch = useDispatch();
  const {
    insurance_program,
    related_insurance_program,
    is_parent,
    insur_prog_clinics,
  } = person;
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
          {related_insurance_program.length > 0 ? (
            <p>{related_insurance_program}</p>
          ) : (
            <button
              onClick={() => dispatch(openModal())}
              className="register"
              type="button"
            >
              Подключить
            </button>
          )}
        </div>
        <a href="">Перечень медицинских услуг</a>
        {insur_prog_clinics && <a href="">Перечень медицинских учреждений</a>}

        {related_insurance_program.length > 0 && (
          <a href="">Перечень медицинских учреждений по смежной программе</a>
        )}
      </article>
      <div className="card-dropdowns">
        {is_parent && <BonusServices />}
        <TravelingInsurance />
        {is_parent || <InsuranceConditions />}
      </div>
    </div>
  );
};
export default CardDMSBottom;
