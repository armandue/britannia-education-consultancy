import React from 'react';
import { Row, Col, Typography } from 'antd';

import './BritanniaMasterFaqItem.css';

const { Title } = Typography;

function BritanniaMasterFaqItem(props) {
  return (
    <div className='MasterFaqItem'>
        <Row className='Question'>
            <Col xl={22}>
                <Title level={3}>{props.item.question}</Title>
            </Col>
        </Row>
        <Row className='Answer'>
            <Col offset={4} xl={18} className='Description'>
                <p>{props.item.answer}</p>
            </Col>
        </Row>
    </div>
  );
}

export default BritanniaMasterFaqItem;
