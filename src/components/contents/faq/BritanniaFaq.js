import React from 'react';
import { Layout, Typography } from 'antd';

import './BritanniaFaq.css';
import BritanniaPhdFaq from './phd/BritanniaPhdFaq';
import BritanniaMasterFaq from './master/BritanniaMasterFaq';

const { Content } = Layout;
const { Title } = Typography;

function BritanniaFaq() {
  return (
    <div className='Faq'>
        <BritanniaPhdFaq/>
        <BritanniaMasterFaq/>
    </div>
  );
}

export default BritanniaFaq;
