import Course from "./components/course/course.component";
import Header from "./components/header/header.component";
import GlobalStyle from "./main.style";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Course />
    </>
  );
};

export default App;
