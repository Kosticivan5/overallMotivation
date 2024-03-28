import Dropdown from "../../Dropdown";

const TravelingInsurance = () => {
  return (
    <Dropdown text={"Полис ВЗР"}>
      <div className="travel-insurance">
        <p>
          Застрахованным по ДМС сотрудникам и застрахованным по ДМС детям
          предоставляется возможность личного страхования (за счёт банка) в
          период путешествий по всему миру.
        </p>

        <a href="/download_file.html?file_id=7010400552666099492" download>
          Скачать памятку
        </a>
      </div>
    </Dropdown>
  );
};
export default TravelingInsurance;
