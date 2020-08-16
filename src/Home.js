import React, { Component, Suspense } from "react";
import { Link, Route } from "react-router-dom";
import movieAPI from "./movie-api";
import Cast from "./Cast";

export default class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    movieAPI.fetchTrendingMovies().then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}movies/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title} {movie.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Suspense fallback={<h1>Loading cast...</h1>}>
          <Route path={`${match.path}movies/:movieId`} component={Cast} />
        </Suspense>
      </>
    );
  }
}
