import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../../featuresDMS/dmsSlice";
import ApplicationModalContent from "./dms/ApplicationModalContent";
import OfficeDoctorModalContent from "./dms/OfficeDoctorModalContent";
import { closeDoctorModal } from "../../featuresDMS/dmsSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, isDoctorModalOpen } = useSelector((store) => store.dms);
  return (
    <aside>
      <div
        onClick={() => {
          dispatch(closeModal());
          dispatch(closeDoctorModal());
        }}
        className={isModalOpen || isDoctorModalOpen ? "modal show" : "modal"}
      ></div>
      <article
        className={
          isModalOpen || isDoctorModalOpen
            ? "modal-content show"
            : "modal-content"
        }
      >
        {isModalOpen && <ApplicationModalContent />}
        {isDoctorModalOpen && <OfficeDoctorModalContent />}
      </article>
    </aside>
  );
};
export default Modal;
