import { Link } from 'react-router-dom';
import { Title } from '../../elements';

import GlobeImg from '/img/icons/ic-globe.png';

const Links = () => {
  return (
    <div className='footer-content links'>
      <div className='column'>
        <Title type='h5' title='Solona' />
        <Link to='#'>Grants</Link>
        <Link to='#'>Break Solona</Link>
        <Link to='#'>Media Kit</Link>
        <Link to='#'>Careers</Link>
        <Link to='#'>Disclaimer</Link>
      </div>
      <div className='column'>
        <Title type='h5' title='Get connected' />
        <Link to='#'>Ecosystem</Link>
        <Link to='#'>Blog</Link>
        <Link to='#'>Newsletter</Link>
      </div>
      <span>
        <img src={GlobeImg} alt='' />
        EN
      </span>
    </div>
  );
};

export default Links;
