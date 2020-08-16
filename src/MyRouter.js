import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import HomePage from "./HomePage";
import MovieDetailsPage from "./MovieDetailsPage";
import Layout from "./Layout";

const App = () => (
  <Layout>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={HomePage} />
      {/* <Route component={NotFound} /> */}
      <Redirect to="/" />
    </Switch>
    </Suspense>
  </Layout>
);

export default App;
