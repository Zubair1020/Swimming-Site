import {
  CardCont,
  CardGroupCont,
  CardImg,
  CardTextCont,
  CourseCont,
  CourseTextCont,
} from "./course.style";
import Img1 from "../../assets/course/img1.svg";
import Img2 from "../../assets/course/img2.svg";
import Img3 from "../../assets/course/img3.svg";

const Course = () => (
  <>
    <CourseCont>
      <CourseTextCont>
        <h1>Our Course</h1>
        <p>
          Morbi auctor lacinia mi nec suscipit. Vivamus eget dui dignissim,
          fermentum leo nec.
        </p>
      </CourseTextCont>

      <CardGroupCont>
        <CardCont>
          <CardImg src={Img1} />
          <CardTextCont>
            <h2>Lorem Ipsum</h2>
            <p>
              Phasellus facilisis, nunc in lacinia auctor, eros lacus aliquet
              velit, quis lobortis risus nunc nec nisi. Maecenas et turpis vitae
              velit volutpat porttitor a sit amet est. Uthasellus facilisis,
              nunc in lacinia auctor, eros lacus aliquet velit, quis lobortis
            </p>
          </CardTextCont>
        </CardCont>

        <CardCont>
          <CardImg src={Img2} />
          <CardTextCont>
            <h2>Lorem Ipsum</h2>
            <p>
              Phasellus facilisis, nunc in lacinia auctor, eros lacus aliquet
              velit, quis lobortis risus nunc nec nisi. Maecenas et turpis vitae
              velit volutpat porttitor a sit amet est. Uthasellus facilisis,
              nunc in lacinia auctor, eros lacus aliquet velit, quis lobortis
            </p>
          </CardTextCont>
        </CardCont>

        <CardCont>
          <CardImg src={Img3} />
          <CardTextCont>
            <h2>Lorem Ipsum</h2>
            <p>
              Phasellus facilisis, nunc in lacinia auctor, eros lacus aliquet
              velit, quis lobortis risus nunc nec nisi. Maecenas et turpis vitae
              velit volutpat porttitor a sit amet est. Uthasellus facilisis,
              nunc in lacinia auctor, eros lacus aliquet velit, quis lobortis
            </p>
          </CardTextCont>
        </CardCont>
      </CardGroupCont>
    </CourseCont>
  </>
);

export default Course;
