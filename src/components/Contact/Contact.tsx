import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Interested in collaborating or discussing a project idea?</p>
         <p>Let’s connect and create something impactful together!</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:prabhunandan016@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:prabhunandan016@gmail.com">prabhunandan016@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919391552933"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919391552933">(+91) 9391552933</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}