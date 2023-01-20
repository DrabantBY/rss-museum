import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/svg/pinterest.svg';

export const Social = () => {
  return (
    <ul className="social footer__social">
      <li className="social-item footer__social-item">
        <a
          className="social-link footer__social-link"
          href="https://www.youtube.com/"
          target="_blank">
          <Youtube />
        </a>
      </li>
      <li className="social-item footer__social-item">
        <a
          className="social-link footer__social-link"
          href="https://www.instagram.com/"
          target="_blank">
          <Instagram />
        </a>
      </li>
      <li className="social-item footer__social-item">
        <a
          className="social-link footer__social-link"
          href="https://www.facebook.com/"
          target="_blank">
          <Facebook />
        </a>
      </li>
      <li className="social-item footer__social-item">
        <a
          className="social-link footer__social-link"
          href="https://twitter.com/"
          target="_blank">
          <Twitter />
        </a>
      </li>
      <li className="social-item footer__social-item">
        <a
          className="social-link footer__social-link"
          href="https://www.pinterest.com/"
          target="_blank">
          <Pinterest />
        </a>
      </li>
    </ul>
  );
};
