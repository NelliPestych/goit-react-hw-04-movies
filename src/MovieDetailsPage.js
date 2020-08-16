import React, { Component } from "react";
import movieAPI from "./movie-api";
import { Link, Route } from "react-router-dom";
import Reviews from "./Reviews";
import CastList from "./CastList";

export default class MovieDetailsPage extends Component {
  state = { movie: null, review: [], cast: [] };

  componentDidMount() {
    movieAPI
      .fetchMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }));

    movieAPI
      .getMovieReiews(this.props.match.params.movieId)
      .then((review) => this.setState({ review: review.results }));
      movieAPI
      .getCredits(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast: cast.cast }));
      console.log(this.state.cast.length);
  }

  goBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push("/movies");
  };

  render() {
    const { review } = this.state;
    const { cast } = this.state;
    return (
      <div>
        <button type="button" onClick={this.goBack}>
          назад
        </button>
        {this.state.movie && (
          <>
            <h1>
              {this.state.movie.title} ({this.state.movie.release_date})
            </h1>
            <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} alt="poster" />
            <p>popularity: {this.state.movie.popularity}</p>
            <p>overview: {this.state.movie.overview}</p>
            <p>
              genres:{" "}
              {this.state.movie.genres.map((genre) => genre.name).join(" ")}
            </p>
          </>
        )}
        <Link
          to={{
            pathname: `${this.props.match.url}/review`,
            state: { from: this.props.location.state.from },
          }}
        >
          review
        </Link>
        {'  '}
        <Link
          to={{
            pathname: `${this.props.match.url}/cast`,
            state: { from: this.props.location.state.from },
          }}
        >
          cast
        </Link>
        <Route path={`${this.props.match.url}/review`} render={props => <Reviews {...props} review={review} />} />
        <Route path={`${this.props.match.url}/cast`} render={props => <CastList {...props} cast={cast} />} />
      </div>
    );
  }
}
