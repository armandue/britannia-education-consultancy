import React from 'react';
import { Layout, Row, Col, List, Typography } from 'antd';
import { CheckCircleOutlined} from '@ant-design/icons';

import './BritanniaPhd.css';
import BritanniaPhdFaq from './faq/BritanniaPhdFaq';
import BritanniaPhdCases from './cases/BritanniaPhdCases';

const { Content } = Layout;
const { Title } = Typography;

const advantages = [
    {
        key: '时间短',
        description: '英国博士平均3-4年即可毕业，接受本科直申PhD，大学全年接受申请，大部分大学无固定入学时间要求。',
    },
    {
        key: '导师制',
        description: '大部分学校的导师拥有自主招生决定权，个别学校如牛津剑桥等采取委员会评审制。',
    },
    {
        key: '科研环境宽松',
        description: '科研课题相对“自由”，对学习能力和科研能力有充分的锻炼，学生可以独立承担研究课题，毕业不设卡。',
    },
    {
        key: '科研基础强',
        description: '英国大学研究实力全球顶尖，学校科研声誉好。',
    },
]

const requirements = [
    {
        key: '学位',
        description: '本科或硕士',
    },
    {
        key: '成绩',
        description: '中国本硕成绩 80+，英国本硕成绩 2.1 或 Merit',
    },
    {
        key: '语言',
        description: '雅思均分 6.5 - 7',
    },
    {
        key: 'Research Proposal',
        description: '需要有一份明确的研究计划，包含研究目标，文献综述，研究内容，研究方法等',
    },
    {
        key: '其他材料',
        description: '2 封推荐信，1 份 PS，1 份 CV',
    },
]

const timeline = [
    {
        time: '第一年',
        actions: [
            '在导师指导下进行 Research Training，学习各种研究方法和实验操作方法。',
            '阅读大量文献进行科研积累，修读相应课程。完成相应的 Research Proposal，博一结束后会进行 Upgrade，完成约一小时的 Presentation，学生由 Research degree 转成 PhD candidate。'
        ],
    },
    {
        time: '第二年',
        actions: [
            '根据研究计划开展实验与研究，采集积累实验数据。',
            '完成实验报告，发表论文。'
        ],
    },
    {
        time: '第三年',
        actions: [
            '积累实验数据，发表论文。',
            '完成毕业论文，准备毕业论文答辩，导师审核科研成果。'
        ],
    },
]

function BritanniaPhd() {
  return (
    <div className='Phd'>
        <Content>
            <Row>
                <Col xl={12}>
                    <Row className='SystemTile'>
                        <Col offset={4} xl={18}>
                            <p className='English'>Doctoral (PhD)</p>
                            <p className='English'>System of British Universities</p>
                            <p className='Chinese'>英国博士体系</p>
                        </Col>
                        <Col offset={4} xl={18}>
                            <p><span className='AdvantageTitle'>英国的博士体系有如下几个优点：</span></p>
                        </Col>
                    </Row>
                    <Row className="Advantages">
                        <Col offset={4} xl={18} xxl={18}>
                            <List
                                itemLayout="horizontal"
                                dataSource={advantages}
                                renderItem={(advantage, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<span className='Index'>{index + 1}</span>}
                                    title={<p className='ListTitle'>{advantage.key}</p>}
                                    description={advantage.description}
                                    />
                                </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                    <Row className='SystemTile'>
                        <Col offset={4} xl={18}>
                            <p className='English'>PhD Entry Requirements</p>
                            <p className='Chinese'>博士申请要求</p>
                        </Col>
                        <Col offset={4} xl={18}>
                            <p><span className='RequirementTitle'>英国的博士体系有如下几个要求：</span></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} xl={18} className='Requirements'>
                            {requirements.map((requirement, index) =>
                                <p key={index}>
                                    <span className='Title'>{requirement.key}:</span>
                                    <span className='Description'>{requirement.description}</span>
                                </p>
                            )}
                        </Col>
                    </Row>
                </Col>
                <Col xl={12} className='Timeline'>
                    <Row>
                        <Col span={24}>
                            <Title className='English'>PhD Timeline</Title>
                            <p className='Chinese'>博士时间线</p>
                        </Col>
                    </Row>
                    <Row>
                        {timeline.map((event, index) =>
                            <Col xl={20} key={index}>
                                <Title level={3} className='Title'>{event.time}</Title>
                                {
                                    event.actions.map((action, i) =>
                                    <Col xl={20} key={i}>
                                        <p><CheckCircleOutlined className='Icon'/>{action}</p>
                                    </Col>
                                    )
                                }
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </Content>
        <BritanniaPhdFaq/>
        <BritanniaPhdCases/>
    </div>
  );
}

export default BritanniaPhd;
