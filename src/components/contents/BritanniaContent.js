import React from 'react';
import { Route } from "react-router-dom";

import './BritanniaContent.css';

import BritanniaHome from './home/BritanniaHome';
import BritanniaAboutUs from './about/BritanniaAboutUs';

function BritanniaContent() {
  return (
    <div className='Content'>
        <Route path="/" exact component={BritanniaHome} />
        <Route path="/about-us" component={BritanniaAboutUs} />
    </div>
  );
}

export default BritanniaContent;
