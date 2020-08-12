import React from 'react';
import { Layout } from 'antd';

import BritanniaHomeTitle from './title/BritanniaHomeTitle';
import BritanniaHomePhd from './phd/BritanniaHomePhd';
import BritanniaHomeMaster from './master/BritanniaHomeMaster';
import BritanniaHomeCourse from './course/BritanniaHomeCourse';
import BritanniaHomeTeam from './team/BritanniaHomeTeam';
import BritanniaHomeContact from './contact/BritanniaHomeContact';

const { Content } = Layout;

function BritanniaHome() {
  return (
    <div >
        <Content>
          <BritanniaHomeTitle />
          <BritanniaHomePhd />
          <BritanniaHomeMaster />
          <BritanniaHomeCourse />
          <BritanniaHomeTeam />
          <BritanniaHomeContact />
        </Content>
    </div>
  );
}

export default BritanniaHome;