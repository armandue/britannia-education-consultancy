import React from 'react';
import './BritanniaHomeTitle.css';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

function BritanniaHomeTitle() {
  return (
    <div className='BritanniaHomeTitle'>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title className='Title'>Britannia Education Consultancy Ltd.</Title>
        </Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title level={2} className='Subtext'>以优质的硕士申请与博士能力培养为中心，帮助每一个青年实现留学梦。</Title>
        </Col>
      </Row>
    </div>
  );
}

export default BritanniaHomeTitle;
