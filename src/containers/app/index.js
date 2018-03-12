import React from 'react';
import { Route, Link } from 'react-router-dom';
import Table from '../table';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>

    <main>
      <Route exact path="/" component={Table} />
    </main>
  </div>
);

export default App;
