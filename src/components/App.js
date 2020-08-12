import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router } from "react-router-dom";

import BritanniaHeader from './header/BritanniaHeader';
import BritanniaContent from './contents/BritanniaContent';
import BritanniaFooter from './footer/BritanniaFooter';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <BritanniaHeader />
          <BritanniaContent />
          <BritanniaFooter />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
