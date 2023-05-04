import { AnimationOnScroll } from 'react-animation-on-scroll';

import SocialMedia from './SocialMedia';
import Links from './Links';

const Footer = () => {
  return (
    <div className='footer'>
      <AnimationOnScroll
        className='footer-container'
        animateIn='animate__fadeIn'
        animateOnce
      >
        <SocialMedia />
        <Links />
      </AnimationOnScroll>
    </div>
  );
};

export default Footer;
