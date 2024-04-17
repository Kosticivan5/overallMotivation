import Dropdown from "../../Dropdown";

const ExtendedProgram = () => {
  return (
    <Dropdown text={"Расширение программы страхования"}>
      <article className="ns-info">
        <p>
          Каждый застрахованный сотрудник имеет возможность расширить страховое
          покрытие <br /> на первичное диагностирование смертельно-опасного
          заболевания (рака или другого злокачественного новообразования) за
          счет собственных средств.
        </p>
        <a href="/download_file.html?file_id=7015429546123929599" download>
          Узнать подробнее о расширении программы
        </a>
      </article>
    </Dropdown>
  );
};
export default ExtendedProgram;
