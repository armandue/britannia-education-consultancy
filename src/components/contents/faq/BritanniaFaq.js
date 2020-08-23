import React from 'react';

import './BritanniaFaq.css';
import BritanniaPhdFaq from './phd/BritanniaPhdFaq';
import BritanniaMasterFaq from './master/BritanniaMasterFaq';

function BritanniaFaq() {
  return (
    <div className='Faq'>
        <BritanniaPhdFaq/>
        <BritanniaMasterFaq/>
    </div>
  );
}

export default BritanniaFaq;
