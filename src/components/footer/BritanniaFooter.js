import React from 'react';
import { Layout } from 'antd';

import './BritanniaFooter.css';

function BritanniaFooter() {
  const { Footer } = Layout;
  return (
    <div className='Footer'>
        <Footer><small>&copy; Copyright 2020, Britannia Education Consultancy Ltd</small></Footer>
    </div>
  );
}

export default BritanniaFooter;
