import React from 'react';
import './App.css';
import { Layout } from 'antd';

import BritanniaHeader from './header/BritanniaHeader';
import BritanniaContent from './contents/BritanniaContent';
import BritanniaFooter from './footer/BritanniaFooter';

function App() {
  return (
    <div className="App">
      <Layout>
        <BritanniaHeader />
        <BritanniaContent />
        <BritanniaFooter />
      </Layout>
    </div>
  );
}

export default App;
