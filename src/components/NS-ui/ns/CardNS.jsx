import CardNSBottom from "./CardNSBottom";
import CardNSTop from "./CardNSTop";
import { useSelector } from "react-redux";

const CardNS = () => {
  const { data } = useSelector((store) => store.dms);

  const isParent = data.find((person) => person.is_parent === true);

  return (
    <article className="card">
      <CardNSTop name={isParent?.name} />
      <CardNSBottom insurType={isParent?.insur_ns} />
    </article>
  );
};
export default CardNS;
