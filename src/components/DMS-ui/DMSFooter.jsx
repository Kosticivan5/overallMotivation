import appleQr from "../../../src/assets/app_store.svg";
import googlePlay from "../../../src/assets/google_play.svg";
import { useSelector } from "react-redux";

const DMSFooter = () => {
  const { data } = useSelector((store) => store.dms);
  const parent = data.find((person) => person.is_parent === true);

  return (
    <footer className="bonus-footer">
      <div>
        <span>Если у вас остались вопросы, пишите нам</span>
        <a href="mailto:DMS@rosbank.ru">DMS@rosbank.ru</a>
      </div>

      {parent && (
        <article className="footer-qr">
          <div>
            <img src={appleQr} alt="apple-store-qr" />
            <img src={googlePlay} alt="google-play-qr" />
          </div>
          <div>
            <p>
              Установите мобильное приложение BestDoctor, чтобы полис ДМС, чат с
              врачами, описание программы и список доступных клиник были всегда
              под рукой.
            </p>
            <p>
              Если вам понадобится помощь при регистрации, обратитесь в
              BestDoctor по бесплатному номеру 8 (800) 101-19-47.
            </p>
            <a href="/download_file.html?file_id=7010402257715345979" download>
              Памятка по работе с мобильным приложением BestDoctor
            </a>
          </div>
        </article>
      )}

      <div className="footer-links">
        <a href="/download_file.html?file_id=7010435485678206649" download>
          Положение о Добровольном медицинском страховании
        </a>
        <a href="/download_file.html?file_id=7010402674547569100" download>
          Приложение 1 к Положению о ДМС
        </a>
        <a href="/download_file.html?file_id=7010403148081161538" download>
          Приложение 2 к Положению о ДМС
        </a>
      </div>
    </footer>
  );
};
export default DMSFooter;
