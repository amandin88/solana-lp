import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title, Description, Button } from '../../elements';

import SpyralesImg from '/img/spyrales.png';
import StackImg from '/img/icons/ic-stack.png';

const Hero = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className='section section__hero'>
      <div className='spyrales-bg'></div>
      <img src={SpyralesImg} alt='' />

      <Title type='h1' title={data.title} />
      <Description type='section' description={data.description} />
      <div className='container-btn'>
        <Button variant='green' label={t('btn-build-now')} />
        <Button label={t('btn-stack-exchange')} icon={StackImg} />
      </div>
    </div>
  );
};

export default Hero;
