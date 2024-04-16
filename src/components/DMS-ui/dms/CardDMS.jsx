import CardDMSBottom from "./CardDMSBottom";
import CardDMSTop from "./CardDMSTop";

const CardDMS = ({ person }) => {
  return (
    <article className="card">
      <CardDMSTop person={person} />
      <CardDMSBottom person={person} />
    </article>
  );
};
export default CardDMS;
