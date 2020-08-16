import React, { Component, lazy, Suspense } from "react";
import { Link, Route } from "react-router-dom";
import movieAPI from "./movie-api";
import Cast from "./Cast";
import queryString from "query-string";

const AsyncMovieList = lazy(() => import("./Searchbox" /* webpackChunkName: "search-box" */));

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      this.fetchMowies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = queryString.parse(prevProps.location.search);
    const { query: nextQuery } = queryString.parse(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchMowies(nextQuery);
    }
  }

  fetchMowies = (query) => {
    movieAPI
      .fetchMovieWithQuery(query)
      .then((movies) => this.setState({ movies }));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        <Suspense fallback={<h1>Loading movies...</h1>}>
          <AsyncMovieList onSubmit={this.handleChangeQuery} />
        </Suspense>
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Suspense fallback={<h1>Loading cast...</h1>}>
          <Route path={`${match.path}/:movieId`} component={Cast} />
        </Suspense>
      </>
    );
  }
}
