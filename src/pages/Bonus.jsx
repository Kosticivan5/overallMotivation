import BonusBanner from "../components/ui/BonusBanner";
import BonusFooter from "../components/ui/BonusFooter";
import BonusInfo from "../components/ui/BonusInfo";

const Bonus = () => {
  return (
    <main className="bonus">
      <BonusBanner />
      <BonusInfo />
      <BonusFooter />
    </main>
  );
};
export default Bonus;
