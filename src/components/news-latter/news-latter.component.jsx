import {
  NewsLatterCont,
  NewsLatterFrom,
  NewsLatterTextCont,
} from "./news-latter.style";
import Bgi from "../../assets/news-latter/newsLatter.svg";

const NewsLatter = () => (
  <NewsLatterCont
    bgi={Bgi}
    loading="lazy"
  >
    <NewsLatterTextCont>
      <h2> Don't Miss Our Update </h2>
      <p>
        Morbi auctor lacinia mi nec suscipit. Vivamus eget dui dignissim,
        fermentum leo nec.
      </p>
    </NewsLatterTextCont>
    <NewsLatterFrom>
      <input
        // type="email"
        // required
        placeholder="Your Email"
      />
      <button type="submit">subscribe</button>
    </NewsLatterFrom>
  </NewsLatterCont>
);

export default NewsLatter;
