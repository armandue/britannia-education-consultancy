import React from 'react';
import './BritanniaHomeCourse.css';
import { Row, Col } from 'antd';

function BritanniaHomeCourse() {
  return (
    <div className='Course'>
        <Row>
            <Col span={5}></Col>
            <Col span={14}>
                <Row>
                    <Col span={10} className='Title'>
                        <Row>
                            <Col span={10}>
                                <p>线<br/>上<br/>分<br/>享<br/>课<br/>程</p>
                            </Col>
                            <Col span={14}>
                                <p>英国硕士申请技巧</p>
                                <p>英国博士申请技巧</p>
                                <p>英国学术圈资讯</p>
                                <p>学术论文写作技巧</p>
                                <p>学术技能干货分享</p>
                                <p>学习技能分享</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={20}>
                                <p>每期线上课程我们都会邀请到世界著名大学博士作为嘉宾，与大家分享学习技巧与实用技能，以及申请过程中会遇到的一些问题。讲座全年开授，名校博士现场答疑。</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={14} className='Display'>
                        
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  );
}

export default BritanniaHomeCourse;
