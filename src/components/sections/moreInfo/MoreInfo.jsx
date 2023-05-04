import { useTranslation } from 'react-i18next';

import { Title, Description, Button } from '../../elements';

import YoutubeImg from '/img/icons/ic-youtube.png';
import PodcastImg from '/img/icons/ic-podcast.png';

const MoreInfo = ({ data, windowWidth }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        windowWidth >= 960
          ? 'section section__more-info grid-2-col'
          : 'section section__more-info grid-1-col'
      }
    >
      <div className='more-info-content'>
        <Title type='h3' title={data[0].title} />
        <Description type='section' description={data[0].description} />
        <div className='email-form'>
          <input className='email' placeholder='Email' />
          <Button variant='green' label={t('btn-sign-up')} />
        </div>
      </div>
      <div className='more-info-content'>
        <Title type='h3' title={data[1].title} />
        <Description type='section' description={data[1].description} />
        <div className='media-btn'>
          <Button variant='youtube' label='Youtube' icon={YoutubeImg} />
          <Button label='Podcast' icon={PodcastImg} />
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
