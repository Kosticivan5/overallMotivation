import appleQr from "../../assets/appStoreQrNS.svg";
import googlePlayQr from "../../assets/googlePlayQrNS.svg";
import { useSelector } from "react-redux";

const NSFooter = () => {
  const { data } = useSelector((store) => store.dms);
  const isParent = data.find((person) => person.is_parent === true);
  return (
    <footer className="bonus-footer">
      <div>
        <span>Если у вас остались вопросы, пишите нам</span>
        <a href="mailto:DMS@rosbank.ru">DMS@rosbank.ru</a>
      </div>

      {isParent?.insur_ns && (
        <article className="footer-qr">
          <div>
            <img src={appleQr} alt="apple-store-qr" />
            <img src={googlePlayQr} alt="google-play-qr" />
          </div>
          <div>
            <p>
              Установите мобильное приложение Капитал LIFE, чтобы полис НС, чат
              с поддержкой и описание программы были всегда под рукой.
            </p>
          </div>
        </article>
      )}

      <div className="footer-links">
        <a
          href="https://teamspace.gts.rus.socgen/sites/HRCOMM/_layouts/15/WopiFrame2.aspx?sourcedoc=%7b8B18E525-304C-4C83-A6DC-BFBC9F071799%7d&file=%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%20%D0%BE%D1%82%2030%20%D0%B8%D1%8E%D0%BD%2023.pdf&action=default"
          target="_blank"
          rel="noopener noreferrer"
        >
          Положение, регламентирующее предоставление НС
        </a>
      </div>
    </footer>
  );
};
export default NSFooter;
