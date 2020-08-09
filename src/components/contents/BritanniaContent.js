import React from 'react';
import { Layout } from 'antd';

import BritanniaHomeTitle from './home/title/BritanniaHomeTitle';
import BritanniaHomeTeam from './home/team/BritanniaHomeTeam';

function BritanniaContent() {
  const { Content } = Layout;
  return (
    <div >
        <Content>
          <BritanniaHomeTitle />
          <BritanniaHomeTeam />
        </Content>
    </div>
  );
}

export default BritanniaContent;
