import React from 'react';
import { Row, Col, Typography } from 'antd';

import './BritanniaPhdFaqItem.css';

const { Title } = Typography;

function BritanniaPhdFapItem(props) {
  return (
    <div className='PhdFaqItem'>
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

export default BritanniaPhdFapItem;
