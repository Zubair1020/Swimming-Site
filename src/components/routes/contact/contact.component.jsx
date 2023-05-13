import { ContactCont, ContactInfoCont, ContactSec } from "./contact.style";

const Contact = () => {
  return (
    <ContactSec>
      <ContactCont>
        <h1>Contact Us</h1>
        <p>
          We are looking forward to here from you and <br /> To help you with
          your Swimming Career ! <br />
          So feel free to contact us.
        </p>
        <ContactInfoCont>
          <a href="tel:+8801915042989">(+880) 01915042989</a>
          <p>
            1234/56 Lorem ipsum dolor sit <br /> Consectetur, QLD 4000
          </p>
          <a href="mailto:rakibhossianraju@gmail.com">
            rakibhossianraju@gmail.com
          </a>
        </ContactInfoCont>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233392.4686519125!2d90.723172!3d23.933646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375430372fd8886b%3A0x2bc04ca4661bcff3!2sNarsingdi%20Government%20College!5e0!3m2!1sen!2sbd!4v1683438062135!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </ContactCont>
    </ContactSec>
  );
};

export default Contact;
