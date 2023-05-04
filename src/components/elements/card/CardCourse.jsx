import { useTranslation } from 'react-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Title, Description } from '../';

import CircleArrowImg from '/img/icons/ic-circle-arrow.png';

const CardCourse = ({
  size = 1,
  title,
  description,
  nbChapters,
  background,
}) => {
  const { t } = useTranslation();

  const renderCard = () => {
    if (size === 3) {
      return (
        <div
          className='card course course__large'
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className='card bg-overlay'>
            <span className='chapters'>{`${nbChapters} ${t(
              'label-chapter'
            )}`}</span>
            <Title type='h2' title={title} />
            <Description type='card-course' description={description} />
            <img src={CircleArrowImg} alt='' />
          </div>
        </div>
      );
    } else {
      return (
        <AnimationOnScroll animateIn='animate__jello' animateOnce>
          <div
            className='card course course__small'
            style={{ backgroundImage: `url(${background})` }}
          >
            <div>
              <span className='chapters'>{`${nbChapters}  ${t(
                'label-chapter'
              )}`}</span>
              <Description type='card-course' description={description} />
            </div>

            <img src={CircleArrowImg} alt='' />
          </div>
        </AnimationOnScroll>
      );
    }
  };

  return renderCard();
};

export default CardCourse;
