const BonusFooter = () => {
  return (
    <footer className="bonus-footer">
      <div>
        <span>Если у вас остались вопросы, пишите нам</span>
        <a href="mailto:KPIs@rosbank.ru">KPIs@rosbank.ru</a>
      </div>
      <p>
        Страница представлена информационно и не является официальным
        нормативным документом и основанием для выплаты/расчета премии.
      </p>
      <p>
        Премия рассчитывается и выплачивается на основании{" "}
        <a
          href="https://cm6.rosbank.rus.socgen/cmj-web/#content;id=rkks%255C044257D00002744FA%253A7E6D66A8AE704C1D432589CE00312539%253Fprojection%255C2default;p=-17983137"
          target="_blank"
          rel="noopener noreferrer"
        >
          Положения о премировании работников
        </a>{" "}
        подразделений Управления сопровождения взыскания Департамента по работе
        с просроченной задолженностью ПАО Росбанк.{" "}
      </p>
      <p>
        Если на странице отображается не ваша система мотивации, сообщите об
        этом на почту <a href="mailto:KPIs@rosbank.ru">KPIs@rosbank.ru</a>
      </p>
    </footer>
  );
};
export default BonusFooter;
