import React, { lazy, Suspense } from 'react';

import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const Dashboard = lazy(() => import('./containers/Dashboard/Dashboard'));

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <Route path="/">
            <Dashboard />
          </Route>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};
