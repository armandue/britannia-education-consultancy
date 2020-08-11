import React from 'react';
import './BritanniaHomeContactDetail.css';
import { Row, Col } from 'antd';

function BritanniaHomeContactDetail(props) {
  return (
    <div className='ContactDetail'>
        <Row className='Info'>
            <Col span={24}>
                <p>{props.detail.title}</p>
                <p>{props.detail.name}</p>
                <p>E-mail: <a href={props.detail.email}>{props.detail.email}</a></p>
            </Col>
        </Row>
    </div>
  );
}

export default BritanniaHomeContactDetail;
