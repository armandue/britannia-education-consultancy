import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function BritanniaHeader() {
    
  return (
    <div >
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Britannia Education Consultancy</Menu.Item>
                <Menu.Item key="2">关于我们</Menu.Item>
                <Menu.Item key="3">PhD精英培养计划</Menu.Item>
                <Menu.Item key="4">硕士无忧申请</Menu.Item>
            </Menu>
        </Header>
    </div>
  );
}

export default BritanniaHeader;
