import Course from "./components/course/course.component";
import Header from "./components/header/header.component";
import Spotlight from "./components/spotlight/spotlight.component";
import GlobalStyle from "./main.style";
import Img1 from "./assets/spotlight/img1.svg";
import Img2 from "./assets/spotlight/img2.svg";
import Bgi2 from "./assets/spotlight/spotlightBg2.svg";
import Statistics from "./components/statistics/statistics.component";
import Information from "./components/information/information.component";
import NewsLatter from "./components/news-latter/news-latter.component";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Course />
      <Spotlight mainImg={Img1} />
      <Statistics />
      <Spotlight
        bgi2={Bgi2}
        mainImg={Img2}
        flexDirection="rowReverse"
      />
      <Information />
      <NewsLatter />
    </>
  );
};

export default App;
