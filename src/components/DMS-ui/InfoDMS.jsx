import CardDMS from "./dms/CardDMS";
import { useSelector } from "react-redux";
import Dropdown from "../Dropdown";
import InsuranceRelatives from "./dms/InsuranceRelatives";
import ContactsDMS from "./dms/ContactsDMS";
import FAQDms from "./dms/FAQDms";

const InfoDMS = () => {
  const { data } = useSelector((store) => store.dms);

  const isParent = data.find((person) => person.is_parent === true);

  return (
    <section className="bonus-info">
      {data.map((person, index) => {
        return <CardDMS key={index} person={person} />;
      })}
      {data.length > 0 ? (
        <div className="bottom-dropdowns">
          {isParent && <InsuranceRelatives />}
          <ContactsDMS />
          <FAQDms />
        </div>
      ) : (
        <FAQDms />
      )}
    </section>
  );
};
export default InfoDMS;
