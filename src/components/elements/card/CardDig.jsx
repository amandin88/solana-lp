import { useTranslation } from 'react-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Title, Description, Button } from '../';

import ArrowImg from '/img/icons/ic-top-right-arrow.png';

const CardDig = ({ category, title, description, hasEllipse = false }) => {
  const { t } = useTranslation();

  return (
    <AnimationOnScroll animateIn='animate__rollIn' animateOnce>
      <div className='card dig'>
        <div>
          <span className='category'>{category}</span>
          <Title type='h5' title={title} />
          <Description type='card-dig' description={description} />
        </div>

        <Button
          variant='learn-more small-icon'
          label={t('btn-learn-more')}
          icon={ArrowImg}
        />

        {hasEllipse && <div className='eclipse' />}
      </div>
    </AnimationOnScroll>
  );
};

export default CardDig;
