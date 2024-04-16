import CardNS from "./ns/CardNS";
import ExtendedProgram from "./ns/ExtendedProgram";
import InsuranceCauses from "./ns/InsuranceCauses";
import NSContacts from "./ns/NSContacts";
import WhatToDo from "./ns/WhatToDo";

const InfoNS = () => {
  return (
    <section className="bonus-info">
      <CardNS />
      <InsuranceCauses />
      <WhatToDo />
      <ExtendedProgram />
      <NSContacts />
    </section>
  );
};
export default InfoNS;
