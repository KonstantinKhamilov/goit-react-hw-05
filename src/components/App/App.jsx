import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
