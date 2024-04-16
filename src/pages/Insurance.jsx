import BannerNS from "../components/NS-ui/BannerNS";
import InfoNS from "../components/NS-ui/InfoNS";
import { useSelector } from "react-redux";

const Insurance = () => {
  const { data } = useSelector((store) => store.dms);

  const isParent = data.find((person) => person.is_parent === true);

  return (
    <main className="bonus">
      <BannerNS />
      {isParent?.insur_ns !== "" && <InfoNS />}
    </main>
  );
};
export default Insurance;
