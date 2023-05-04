import { useEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import {
  Hero,
  GetStarted,
  DigDeeper,
  ToTheSource,
  ChangeLog,
  MoreInfo,
} from '../../../components/sections';

import {
  heroData,
  cardsCoursesData,
  cardsDigsData,
  sourcesData,
  changeLogData,
  moreInfoData,
} from '../../../dummyDatas/dummyData';
import { useState } from 'react';

const Home = () => {
  const [width, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleOnResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleOnResize);

    return () => window.removeEventListener('resize', handleOnResize);
  }, []);

  return (
    <div className='section-container'>
      <Hero data={heroData} />

      <GetStarted data={cardsCoursesData} windowWidth={width} />
      <DigDeeper data={cardsDigsData} windowWidth={width} />

      <div className='section section__docs'>
        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce>
          <div className='docs-content'>
            <ToTheSource data={sourcesData} windowWidth={width} />
            <ChangeLog data={changeLogData} windowWidth={width} />
          </div>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll animateIn='animate__zoomIn' animateOnce>
        <MoreInfo data={moreInfoData} windowWidth={width} />
      </AnimationOnScroll>
    </div>
  );
};

export default Home;
