import React from 'react';
import { Route } from "react-router-dom";
import { BackTop } from 'antd';

import './BritanniaContent.css';

import BritanniaHome from './home/BritanniaHome';
import BritanniaAboutUs from './about/BritanniaAboutUs';
import BritanniaPhd from './phd/BritanniaPhd';
import BritanniaMaster from './master/BritanniaMaster';
import BritanniaFaq from './faq/BritanniaFaq';

function BritanniaContent() {
  return (
    <div className='Content'>
        <Route path="/" exact component={BritanniaHome} />
        <Route path="/about-us" component={BritanniaAboutUs} />
        <Route path="/phd" component={BritanniaPhd} />
        <Route path="/master" component={BritanniaMaster} />
        <Route path="/faq" component={BritanniaFaq} />
        <BackTop />
    </div>
  );
}

export default BritanniaContent;
