import {
  FloatImg,
  ImgCont,
  MainImg,
  SpotlightCont,
  TextCont,
} from "./spotlight.style";
import FloatImage from "../../assets/spotlight/spotlightShape.svg";
import Bgi from "../../assets/spotlight/spotlightBg.svg";

const Spotlight = ({ mainImg, flexDirection }) => {
  return (
    <>
      <SpotlightCont
        flexDirection={flexDirection}
        bgi={Bgi}
      >
        <ImgCont>
          <FloatImg src={FloatImage} />
          <MainImg src={mainImg} />
        </ImgCont>
        <TextCont>
          <h2>Your Title Here</h2>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pharetra nisi sapien, quis tristique risus pellentesque vel. Ut
            placerat ipsum lectus, quis volutpat metus venenatis eu. Nullam
            ultrices nisi vulputate venenatis venenatis. Sed rutrum urna ut nunc
            egestas iaculis a nec eros. Ut bibendum tempor ligula, at hendrerit
            mauris accumsan non. Fusce rutrum eleifend dui. Nunc lobortis urna
            nec odio lobortis auctor.
          </article>
          <article>
            In consequat quis odio sit amet congue. Nulla venenatis enim est,
            tempor placerat nulla aliquet ac. Aenean vestibulum arcu et metus
            dictum mattis. Aenean adipiscing lorem ac urna vulputate euismod. Ut
            eu enim ac leo elementum pharetra. Nulla scelerisque elit arcu, ac
            tristique eros laoreet vel. Vestibulum in quam id ipsum ultricies
            pellentesque.
          </article>
          <article>
            Cras laoreet vestibulum magna ut cursus. Cras id viverra erat. Nunc
            eu pretium arcu. Aenean in facilisis felis. Donec a consequat
            ligula. Mauris nulla lorem, tincidunt non blandit mollis, porttitor
            eget justo.
          </article>
        </TextCont>
      </SpotlightCont>
    </>
  );
};

export default Spotlight;
