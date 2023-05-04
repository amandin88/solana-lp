import { useTranslation } from 'react-i18next';

import { Title, Description, Button } from '../../elements';

import ArrowImg from '/img/icons/ic-top-right-arrow.png';

const ToTheSource = ({ data, windowWidth }) => {
  const { t } = useTranslation();

  return (
    <div className='section to-the-source'>
      <Title type='h2' title={data.title} />
      <Description type='section' description={data.description} />

      <div className={windowWidth >= 960 ? 'grid-2-col' : 'grid-1-col'}>
        {data.sources.map((source, index) => {
          return (
            <div key={index}>
              <div className='header-container'>
                <Title type='h4' title={source.title} />
                <Button
                  variant='small-icon'
                  label={t('btn-view-all')}
                  icon={ArrowImg}
                />
              </div>
              <Description type='section' description={source.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToTheSource;
