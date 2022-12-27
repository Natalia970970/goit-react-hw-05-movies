import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Header } from "./Header/Header";

const Home = lazy(() => import('../pages/pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('../pages/pages/Movies/Movies'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route index element={<Home></Home>} />
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails></MovieDetails>}>
            <Route path="/movies/:movieId/cast" element={<Cast></Cast>}></Route>
            <Route path="/movies/:movieId/reviews" element={<Reviews></Reviews>}></Route>
          </Route>
          <Route path="*" element={'NotFound'} />
        </Route>
      </Routes>
    </div>
  );
};
