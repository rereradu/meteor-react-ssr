import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Loadable from 'react-loadable';

import Loading from '/imports/ui/components/loading.js';

const LoadableHomePage = Loadable({
  loader: () => import('/imports/ui/pages/home/home.js'),
  loading: Loading,
  delay: 200
});

import NotFoundPage from '/imports/ui/pages/notFound/notFound.js';

class SiteLayout extends Component {

  render() {
    return (
      <div className="site-container">
        <Helmet>
          <title>Site layout</title>
        </Helmet>
        <div className="header-container">
        </div>
        <div className="row body-container">
          <Switch>
            <Route exact path="/" component={LoadableHomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <div className="footer-container">
        </div>
      </div>
    )
  }
}

export default SiteLayout;
