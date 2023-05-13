import GlobalStyle from "./main.style";
import { Route, Routes } from "react-router-dom";
import About from "./components/routes/about/about.component";
import Services from "./components/routes/services/services.component";
import Products from "./components/routes/products/products.component";
import Contact from "./components/routes/contact/contact.component";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Navigation />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="services"
            element={<Services />}
          />
          <Route
            path="products"
            element={<Products />}
          />
          <Route
            path="contact"
            element={<Contact />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
