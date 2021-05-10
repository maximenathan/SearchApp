import React from 'react';
import './App.css';
import Layout from 'components/Layout';
import Search from 'features/algolia/Search';
import Toolbar from './features/Toolbar';
import Results from './features/Results';
import Filters from './features/Filters';

const App = () => (
  <Layout search={<Search />} filters={<Filters />} stats={<Toolbar />}>
    <Results />
  </Layout>
);

export default App;
