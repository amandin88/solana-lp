import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Title, Description, CardDig } from '../../elements';

const DigDeeper = ({ data, windowWidth }) => {
  return (
    <div className='section section__dig-deeper'>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOnce>
        <Title type='h2' title={data.title} />
        <Description type='section' description={data.description} />
      </AnimationOnScroll>

      <div
        className={
          windowWidth >= 960
            ? 'grid-3-col'
            : windowWidth >= 640
            ? 'grid-2-col'
            : 'grid-1-col'
        }
      >
        {data.digs.map((dig, index) => {
          return (
            <CardDig
              key={index}
              category={dig.category}
              title={dig.title}
              description={dig.description}
              hasEllipse={index % 2 === 0 && true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DigDeeper;
