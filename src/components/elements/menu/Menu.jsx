import { useTranslation } from 'react-i18next';

import MenuItem from './MenuItem';

const Menu = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      name: t('menu-learn'),
      url: '#',
    },
    {
      name: t('menu-build'),
      url: '#',
    },
    {
      name: t('menu-network'),
      url: '#',
    },
    {
      name: t('menu-community'),
      url: '#',
    },
  ];

  return (
    <div className='menu'>
      {menuItems.map((item, index) => {
        return <MenuItem key={index} name={item.name} url={item.url} />;
      })}
    </div>
  );
};

export default Menu;
