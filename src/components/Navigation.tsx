import { Link } from 'react-router-dom';

type NavProps = {
  className?: string;
}

const Navigation: React.FC<NavProps> = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mens">Men's</Link>
        </li>
        <li>
          <Link to="/womens">Women's</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
