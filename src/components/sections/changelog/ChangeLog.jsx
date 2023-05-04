import { useTranslation } from 'react-i18next';

import { Title, Description, Button } from '../../elements';

import ChangelogImg from '/img/changelog.png';

const ChangeLog = ({ data, windowWidth }) => {
  const { t } = useTranslation();

  return (
    <div className='section changelog'>
      <div className={windowWidth >= 960 ? 'grid-2-col' : 'grid-1-col'}>
        <div>
          <Title type='h2' title={data.title} />
          <Description type='section' description={data.description} />
          <Button label={t('btn-latest-episode')} />
        </div>
        <div>
          <img src={ChangelogImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ChangeLog;
