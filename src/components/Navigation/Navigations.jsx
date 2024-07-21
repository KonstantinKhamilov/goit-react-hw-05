import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Головна</Link>
        </li>
        <li>
          <Link to="/movies">Фільми</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
