import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PetDetailsPage from './pages/PetDetailsPage';
import ErrorBoundary from '../components/ErrorBoundary';
import './index.css';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pet/:id" component={PetDetailsPage} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
