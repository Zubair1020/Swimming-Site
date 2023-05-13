import Spotlight from "../../spotlight/spotlight.component";
import Img1 from "../../../assets/spotlight/img1.svg";
import Img2 from "../../../assets/spotlight/img2.svg";
import Bgi2 from "../../../assets/spotlight/spotlightBg2.svg";
import { ServicesSec } from "./services.style";

const Services = () => {
  return (
    <ServicesSec>
      <Spotlight mainImg={Img1} />
      <Spotlight
        flexDirection="reverse"
        bgi2={Bgi2}
        mainImg={Img2}
      />
    </ServicesSec>
  );
};

export default Services;
