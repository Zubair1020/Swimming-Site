import Course from "../../course/course.component";
import Statistics from "../../statistics/statistics.component";
import { ProductSec } from "./products.style";

const Product = () => {
  return (
    <ProductSec>
      <Course />
      <Statistics />
    </ProductSec>
  );
};

export default Product;
