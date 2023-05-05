import Course from "./components/course/course.component";
import Header from "./components/header/header.component";
import Spotlight from "./components/spotlight/spotlight.component";
import GlobalStyle from "./main.style";
import Img1 from "./assets/spotlight/img1.svg";
import Statistics from "./components/statistics/statistics.component";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Course />
      <Spotlight
        mainImg={Img1}
        // flexDirection="rowReverse"
      />
      <Statistics />
    </>
  );
};

export default App;
