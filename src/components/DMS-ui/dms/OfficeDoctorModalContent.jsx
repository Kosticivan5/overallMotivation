import { IoCloseOutline } from "react-icons/io5";
import { closeDoctorModal } from "../../../featuresDMS/dmsSlice";
import { useDispatch } from "react-redux";

const OfficeDoctorModalContent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(closeDoctorModal())}
        className="close-modal"
      >
        <IoCloseOutline />
      </button>
      <h2>Врач в офисе</h2>
      {/* moscow */}
      <section>
        <div className="modal-grid">
          <h4>Москва</h4>
          <p>
            ул. Маши Порываевой, 34 <br /> 1 этаж - кабинет 20110
          </p>
          <div className="schedule">
            <div className="day">
              <span>Понедельник</span>
              <span>Среда</span>
              <span>Четверг</span>
            </div>
            <div className="time">
              <span>9:00 - 11:00</span>

              <span>16:00 - 18:00</span>

              <span>14:00 - 16:00</span>
            </div>
          </div>
          <p>
            ул. Смольная, 22 <br /> 1 этаж - кабинет 184{" "}
          </p>
          <div className="schedule">
            <div className="day">
              <span>Среда</span>
              <span>Пятница</span>
            </div>
            <div className="time">
              <span>14:00 - 16:00</span>
              <span>9:00 - 11:00</span>
            </div>
          </div>
          <p>
            1-й Красногвардейский <br /> пр., 19  (ОКО-2) <br /> 1 этаж - 01.12
          </p>
          <div className="schedule">
            <div className="day">
              <span>Среда</span>
              <span>Пятница</span>
            </div>
            <div className="time">
              <span>14:00 - 16:00</span>
              <span>9:00 - 11:00</span>
            </div>
          </div>
        </div>
      </section>
      {/* samara */}
      <section>
        <div className="modal-grid">
          <h4>Самара</h4>
          <p>
            ул. Московское шоссе, <br /> д. 4а, стр. 1 <br /> 1 этаж - кабинет
            4.14
          </p>
          <div className="schedule">
            <div className="day">
              <span>Понедельник</span>
            </div>
            <div className="time">
              <span>9:00 - 11:00</span>
            </div>
          </div>
        </div>
      </section>
      {/* saints petersburg */}
      <section className="sp">
        <div className="modal-grid">
          <h4>Санкт-Петербург</h4>
          <p>
            наб. Канала Грибоедова, <br /> д. 13 <br /> 1 этаж - кабинет 104
          </p>
          <div className="schedule">
            <div className="day">
              <span>Четверг</span>
            </div>
            <div className="time">
              <span>15:00 - 17:00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OfficeDoctorModalContent;
