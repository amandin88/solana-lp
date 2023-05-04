import { Link } from 'react-router-dom';

const MenuItem = ({ name, url }) => {
  return (
    <Link className='menu-item' to={url}>
      {name}
    </Link>
  );
};

export default MenuItem;
