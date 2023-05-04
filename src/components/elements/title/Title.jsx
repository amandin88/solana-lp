const Title = ({ type, title }) => {
  switch (type) {
    case 'h2':
      return <h2>{title}</h2>;
    case 'h3':
      return <h3>{title}</h3>;
    case 'h4':
      return <h4>{title}</h4>;
    case 'h5':
      return <h5>{title}</h5>;
    default:
      return <h1>{title}</h1>;
  }
};

export default Title;
