import BannerNS from "../components/NS-ui/BannerNS";
import InfoNS from "../components/NS-ui/InfoNS";
import { useSelector } from "react-redux";
import NSFooter from "../components/NS-ui/NSFooter";

const Insurance = () => {
  const { data } = useSelector((store) => store.dms);

  const isParent = data.find((person) => person.is_parent === true);

  return (
    <main className="bonus">
      <BannerNS />
      {(isParent?.insur_ns !== "" || isParent) && <InfoNS />}
      <NSFooter />
    </main>
  );
};
export default Insurance;
