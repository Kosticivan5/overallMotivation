import CardDMS from "./dms/CardDMS";
import { useSelector } from "react-redux";

const InfoDMS = () => {
  const { data } = useSelector((store) => store.dms);

  // console.log(data[0].people);

  return (
    <section className="bonus-info">
      {data.map((person, index) => {
        return <CardDMS key={index} person={person} />;
      })}
    </section>
  );
};
export default InfoDMS;
