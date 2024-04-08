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
    relat_insur_clinics,
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
          {relat_insur_clinics !== "" && related_insurance_program !== "" ? (
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
        <a href="/download_file.html?file_id=7010403758743842869" download>
          Перечень медицинских услуг
        </a>
        {insur_prog_clinics !== "" && insurance_program !== "" && (
          <a
            href={`/download_file.html?file_id=${insur_prog_clinics}`}
            download
          >
            Перечень медицинских учреждений
          </a>
        )}

        {relat_insur_clinics !== "" && related_insurance_program !== "" && (
          <a
            href={`/download_file.html?file_id=${relat_insur_clinics}`}
            download
          >
            Перечень медицинских учреждений по смежной программе
          </a>
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
