import Header from "../../header/header.component";
import Course from "../../course/course.component";
import Spotlight from "../../spotlight/spotlight.component";
import Statistics from "../../statistics/statistics.component";
import Information from "../../information/information.component";
import NewsLatter from "../../news-latter/news-latter.component";
import Footer from "../../footer/footer.component";
import Img1 from "../../../assets/spotlight/img1.svg";
import Img2 from "../../../assets/spotlight/img2.svg";
import Bgi2 from "../../../assets/spotlight/spotlightBg2.svg";

const Somthing = () => {
  return (
    <div>
      <Header />
      <Course />
      <Spotlight
        mainImg={Img1}
        loading="lazy"
      />
      <Statistics />
      <Spotlight
        bgi2={Bgi2}
        mainImg={Img2}
        loading="lazy"
        flexDirection="reverse"
      />
      <Information />
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default Somthing;
