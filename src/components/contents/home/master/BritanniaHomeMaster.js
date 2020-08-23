import React from 'react';
import './BritanniaHomeMaster.css';
import { Row, Col } from 'antd';

function BritanniaHomeMaster() {
  return (
    <div className='Master'>
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={24} className='Title'>
                        <p>
                            硕士申请服务流程
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='Title'>
                        <p>
                            Masters Application – Service Process
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className='Steps'>
            <Col xl={5} xs={1}></Col>
            <Col xl={14} xs={22}>
                <Row>
                    <Col xl={23} className='Step'>
                        <Row>
                            <Col xl={3} xs={4} className='Number'>
                                01
                            </Col>
                            <Col span={1}></Col>
                            <Col span={2} className='Subtitle'></Col>
                            <Col xl={18} xs={17} className='Subtitle'>
                                评估制定申请方案
                            </Col>
                            <Col xl={4}></Col>
                            <Col xl={20} className='Detail'>
                                <p>制定申请计划，锚定专业与大学，提供不少于20所大学供申请人选择。申请学校涵盖G5及英联邦所有大学，最终提供8所高校/专业的正式申请。</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={3} xs={4} className='Number'>
                                02
                            </Col>
                            <Col span={1}></Col>
                            <Col span={2} className='Subtitle'></Col>
                            <Col xl={18} xs={17} className='Subtitle'>
                                撰写申请文书
                            </Col>
                            <Col xl={4}></Col>
                            <Col xl={20} className='Detail'>
                                <p>根据申请人背景与所选大学专业情况，写手会根据不同大学的特殊要求给出8份独立不同的CV、PS和Career Plan等申请文书，可根据反馈意见进行修改微调。</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={3} xs={4} className='Number'>
                                03
                            </Col>
                            <Col span={1}></Col>
                            <Col span={2} className='Subtitle'></Col>
                            <Col xl={18} xs={17} className='Subtitle'>
                                进行网申
                            </Col>
                            <Col xl={4}></Col>
                            <Col xl={20} className='Detail'>
                                <p>制定合适的网申计划，根据不同大学特性适当调整网申时间。</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={3} xs={4} className='Number'>
                                04
                            </Col>
                            <Col span={1}></Col>
                            <Col span={2} className='Subtitle'></Col>
                            <Col xl={18} xs={17} className='Subtitle'>
                                面试辅导与培训
                            </Col>
                            <Col xl={4}></Col>
                            <Col xl={20} className='Detail'>
                                <p>针对特定专业进行面试培训与辅导，提供面试真题，模拟实战演练。</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={3} xs={4} className='Number'>
                                05
                            </Col>
                            <Col span={1}></Col>
                            <Col span={2} className='Subtitle'></Col>
                            <Col xl={18} xs={17} className='Subtitle'>
                                提供奖学金项目申请信息
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  );
}

export default BritanniaHomeMaster;
