import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
import leetcode from '../../assets/leetcode.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.linkedin.com/in/prabhu-nandan-a2876b291/" className="logo">
        <span>www.prabhunandan</span>
        <span>.in</span>
      </a>
      <div>
        <p>© 2025 | Built by Prabhunandan</p>

      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/prabhu-nandan-a2876b291/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Prabhunandan016"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://github.com/Prabhunandan016"
          target="_blank"
          rel="noreferrer"
        >
          <img src={leetcode} alt="leetcode" />
        </a>
        {/* <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a> */}
        <a
          href="https://www.instagram.com/prabhunandan016/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
