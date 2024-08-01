import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EmissionsTable from './EmissionsTable';
import '../App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <EmissionsTable />
      </div>
      <Footer />
    </div>
  );
};

export default App;
