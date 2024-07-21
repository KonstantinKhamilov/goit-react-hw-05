import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/movies">Фильмы</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
