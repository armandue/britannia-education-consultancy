import React from 'react';
import { Layout } from 'antd';

import BritanniaHomeTitle from './home/title/BritanniaHomeTitle';
import BritanniaHomePhd from './home/phd/BritanniaHomePhd';
import BritanniaHomeMaster from './home/master/BritanniaHomeMaster';
import BritanniaHomeCourse from './home/course/BritanniaHomeCourse';
import BritanniaHomeTeam from './home/team/BritanniaHomeTeam';
import BritanniaHomeContact from './home/contact/BritanniaHomeContact';

function BritanniaContent() {
  const { Content } = Layout;
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

export default BritanniaContent;
