import { InformationCont } from "./information.style";
import Bgi from "../../assets/information/informationBg.svg";

const Information = () => (
  <InformationCont bgi={Bgi}>
    <h2>
      Morbi auctor lacinia mi nec suscipit. Vivamus eget dui dignissim,
      fermentum leo nec.
    </h2>
    <h2>- Jack The Ripper</h2>
  </InformationCont>
);

export default Information;
