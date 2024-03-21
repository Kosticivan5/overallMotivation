import BonusCalculator from "./BonusCalculator";
import BonusFactors from "./BonusFactors";
import FAQ from "./FAQ";
import ManagersFormula from "./managers/ManagersFormula";

const BonusInfo = () => {
  return (
    <section className="bonus-info">
      <BonusFactors />
      <ManagersFormula />
      <BonusCalculator />
      <FAQ />
    </section>
  );
};
export default BonusInfo;
