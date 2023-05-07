import {
  AboutCont,
  FooterCont,
  HeadingThereCont,
  HeadingTowCont,
} from "./footer.style";
import PhoneImg from "../../assets/footer/phone.png";
import EmailImg from "../../assets/footer/email.png";
import AddressImg from "../../assets/footer/address.png";

const Footer = () => (
  <FooterCont id="about">
    <AboutCont>
      <h2>About</h2>

      <ul>
        <li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in.
          </p>
        </li>
      </ul>
    </AboutCont>
    <HeadingTowCont>
      <h2>Heading Tow</h2>

      <ul>
        <li>
          <p>Lorem ipsum dolor sit amet</p>
        </li>
        <li>
          <p>Consectetur adipiscing elit</p>
        </li>
        <li>
          <p>Maecenas vel augue</p>
        </li>
        <li>
          <p>Phasellus condimentum</p>
        </li>
        <li>
          <p>Nunc eget magna</p>
        </li>
        <li>
          <p>Mauris luctus urna </p>
        </li>
        <li>
          <p>Aenean at enim</p>
        </li>
        <li>
          <p>Curabitur nec</p>
        </li>
        <li>
          <p>Duis faucibus</p>
        </li>
        <li>
          <p>Nullam volutpat</p>
        </li>
      </ul>
    </HeadingTowCont>
    <HeadingThereCont>
      <h2>Heading There</h2>
      <ul>
        <li>
          <div>
            <img
              src={PhoneImg}
              alt="phone png"
            />
          </div>
          <p>
            <a href="tel:+8801915042989">(+880) 01915042989</a>
          </p>
        </li>
        <li>
          <div>
            <img
              src={AddressImg}
              alt="Address png"
            />
          </div>
          <p>
            1234/56 Lorem ipsum dolor sit <br /> Consectetur, QLD 4000
          </p>
        </li>
        <li>
          <div>
            <img
              src={EmailImg}
              alt="Email png"
            />
          </div>
          <p>
            <a href="mailto:rakibhossianraju@gmail.com">
              rakibhossianraju@gmail.com
            </a>
          </p>
        </li>
      </ul>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233392.4686519125!2d90.723172!3d23.933646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375430372fd8886b%3A0x2bc04ca4661bcff3!2sNarsingdi%20Government%20College!5e0!3m2!1sen!2sbd!4v1683438062135!5m2!1sen!2sbd"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </HeadingThereCont>
  </FooterCont>
);

export default Footer;
