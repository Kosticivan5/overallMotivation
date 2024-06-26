import BannerDMS from "../components/DMS-ui/BannerDMS";
import InfoDMS from "../components/DMS-ui/InfoDMS";
import { useEffect } from "react";
import { getData } from "../featuresDMS/dmsSlice";
import { useDispatch, useSelector } from "react-redux";
import DMSFooter from "../components/DMS-ui/DMSFooter";

const DMS = () => {
  // const dispatch = useDispatch();
  // const { isLoading } = useSelector((store) => store.dms);

  // useEffect(() => {
  //   dispatch(getData());
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="loader">
  //       <div className="loading-spinner"></div>
  //     </div>
  //   );
  // }

  return (
    <main className="bonus">
      <BannerDMS />
      <InfoDMS />
      <DMSFooter />
    </main>
  );
};

export default DMS;
