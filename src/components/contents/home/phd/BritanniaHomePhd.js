import React from 'react';
import './BritanniaHomePhd.css';
import { Row, Col, List, Divider } from 'antd';
import { CaretRightOutlined, CaretLeftOutlined, CaretDownOutlined } from '@ant-design/icons';

const data = [
    {
        title: '信息采集',
        description: '学生与项目顾问沟通，提供个人信息及初步意向。',
    },
    {
        title: '确定团队成员',
        description: '分析学生信息及意向，确立申请小组，包括学生本专业导师，课程导师，面试导师，写手。团队辅导成员为5-6人，全程全博士团队辅导。',
    },
    {
        title: '研究方向选择规划（1-2周）',
        description: '研究方向的选择对于博士申请至关重要，不仅影响申请的成功率，更决定了学生今后的学业和事业方向。本项目结合宏观上选择研究方向的基本方法及微观上学生专业相关的研究分析两个方面为学生提供课程服务，一步步引导学生找到最适合自己的研究方向。',
    },
    {
        title: '学生能力提升（7-8周）',
        description: '写作技能提升，包括Proposal写作方法，英文写作局部逻辑提升，写作整体结构辅导。专业相关问题答疑，学生随时可向专业导师对学习，课业任务等相关的问题进行提问；可转化技能培训，包括快速阅读文献，规范写作邮件，合理时间规划，科研软件教学等培训；博士研究入门导向，传授大量博士生的学习及研究经验，帮助申请人从硕士到博士进行良好过度，迅速进入研究状态。',
    },
    {
        title: '导师研究方向分析及研究计划书写作（4-6周）',
        description: '与专业导师商议确定申请导师并分析导师的研究方向；进行研究计划书写作，修改，润色等工作。',
    },
    {
        title: '套磁及申请（4-8周）',
        description: '',
    },
];


function BritanniaHomePhd() {
  return (
    <div className='Phd'>
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={24} className='Title'>
                        <p>
                            博士申请服务流程
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='Title'>
                        <p>
                            PhD Application – Service Process
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className='Steps'>
            <Col xl={5}></Col>
            <Col xl={14} xs={0}>
                <Row>
                    <Col xl={4} className='Step'>
                        <p>
                            确定<br/>申请团队
                        </p>
                    </Col>
                    <Col xl={2} className='Arrow'>
                        <CaretRightOutlined />
                    </Col>
                    <Col xl={4} className='Step'>
                        <p>
                            确定<br/>研究方向
                        </p>
                    </Col>
                    <Col xl={2} className='Arrow'>
                        <CaretRightOutlined />
                    </Col>
                    <Col xl={4} className='Step'>
                        <p>
                            5对1<br/>课程辅导
                        </p>
                    </Col>
                    <Col xl={2} className='Arrow'>
                        <CaretRightOutlined />
                    </Col>
                    <Col xl={4} className='Step'>
                        <p>
                            锚定<br/>大学与导师
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={20} xl={18}></Col>
                    <Col span={4} className='Arrow'>
                        <CaretDownOutlined />
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} className='Step'>
                        <p>
                            Online<br/>application
                        </p>
                    </Col>
                    <Col xl={2} className='Arrow'>
                        <CaretLeftOutlined />
                    </Col>
                    <Col xl={4} className='Step'>
                        <p>
                            面试培训
                        </p>
                    </Col>
                    <Col xl={2} className='Arrow'>
                        <CaretLeftOutlined />
                    </Col>
                    <Col xl={4} className='Step'>
                        <p>
                            套词技巧
                        </p>
                    </Col>
                    <Col xl={2} className='Arrow'>
                        <CaretLeftOutlined />
                    </Col>
                    <Col xl={4} className='Step'>
                        <p>
                            指导<br/>写作RP
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xl={5} xs={1}></Col>
            <Col xl={13} xs={22} className='List'>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<CaretRightOutlined className='Avatar' />}
                        title={<p className='ListTitle'>{item.title}</p>}
                        description={item.description}
                        />
                    </List.Item>
                    )}
                />
            </Col>
        </Row>
        <Row>
            <Col span={16} offset={4}>
                <Divider className="Divider"/>
            </Col>
        </Row>
    </div>
  );
}

export default BritanniaHomePhd;
