import BonusCalculator from "./BonusCalculator";
import BonusFactors from "./BonusFactors";
import FAQ from "./FAQ";

const BonusInfo = () => {
  return (
    <section className="bonus-info">
      <BonusFactors />
      <BonusCalculator />
      <FAQ />
    </section>
  );
};
export default BonusInfo;
