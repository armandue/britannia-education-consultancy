import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

import './BritanniaHeader.css';

const { Header } = Layout;

function BritanniaHeader(props) {
    
  return (
    <div className='Header'>
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']}>
                <Menu.Item key="/"><Link to='/'>Britannia Education Consultancy</Link></Menu.Item>
                <Menu.Item key="/about-us"><Link to='/about-us'>关于我们</Link></Menu.Item>
                <Menu.Item key="/phd"><Link to='/phd'>PhD精英培养计划</Link></Menu.Item>
                <Menu.Item key="/master"><Link to='/master'>硕士无忧申请</Link></Menu.Item>
                <Menu.Item key="/faq"><Link to='/faq'>Application FAQ</Link></Menu.Item>
            </Menu>
        </Header>
    </div>
  );
}

export default BritanniaHeader;
