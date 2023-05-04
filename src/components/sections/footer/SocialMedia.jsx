import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LogoImg from '/img/logos/logo-no-text.png';
import DiscordImg from '/img/icons/ic-discord-b.png';
import GitHubImg from '/img/icons/ic-github-b.png';
import TelegramImg from '/img/icons/ic-telegram-b.png';
import TwitterImg from '/img/icons/ic-twitter-b.png';
import YoutubeImg from '/img/icons/ic-youtube-b.png';

const SocialMedia = () => {
  const { t } = useTranslation();

  return (
    <div className='footer-content social'>
      <img className='footer-logo' src={LogoImg} alt='' />
      <span className='footer-company'>{t('label-found-by')}</span>
      <div className='footer-social'>
        <Link to='#'>
          <img src={YoutubeImg} alt='' />
        </Link>
        <Link to='#'>
          <img src={TwitterImg} alt='' />
        </Link>
        <Link to='#'>
          <img src={DiscordImg} alt='' />
        </Link>
        <Link to='#'>
          <img src={GitHubImg} alt='' />
        </Link>
        <Link to='#'>
          <img src={TelegramImg} alt='' />
        </Link>
      </div>
      <span className='footer-copyrights'>{t('label-copyright')}</span>
    </div>
  );
};

export default SocialMedia;
