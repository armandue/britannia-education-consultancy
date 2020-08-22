import React from 'react';
import { Layout, Row, Col, List, Typography } from 'antd';
import { CheckCircleOutlined} from '@ant-design/icons';

import './BritanniaMaster.css';
import BritanniaMasterCases from './cases/BritanniaMasterCases';

const { Content } = Layout;
const { Title } = Typography;

const advantages = [
    {
        key: '精准评估',
        description: '根据每一位申请人的情况进行专业学术评估，对申请人进行精准定位，避免了择校过程中目标过高或过低，留下遗憾。',
    },
    {
        key: '私人订制',
        description: '每一个申请案例均由由一名学术顾问、一名英国 native speaker 写手、一名面试培训官和一名学术导师负责，学生可随时向学术顾问反馈意见，根据申请人具体要求和英国高校招生情况及时调整申请方案，策划最佳留学方案。',
    },
    {
        key: '高品质文书',
        description: '文书团队均由英国本土资深写手担任，均为英语母语博士。每一位申请人申请不同学校/专业的文书均独立写作，相同专业PS文书均进行微调与再创作，拒绝模板文书，拒绝中式英语，每一份文书均经由英国学术查重系统Turnitin筛查，杜绝抄袭。',
    },
    {
        key: '面试无忧',
        description: '需要面试的专业均安排一名资深英国博士对申请人进行全英文面试培训，提供面试材料、进行面试技巧辅导、模拟实战演练，为申请人的面试全程保驾护航。',
    },
]

const requirements = [
    {
        key: '学位',
        description: '本科',
    },
    {
        key: '成绩',
        description: '中国本科成绩 80+，英国本科成绩 2.2',
    },
    {
        key: '语言',
        description: '雅思均分 6.5 - 7',
    },
    {
        key: '其他材料',
        description: '2 封推荐信，1 份 PS',
    },
]

function BritanniaMaster() {
  return (
    <div className='Master'>
        <Content>
            <Row>
                <Col xl={12}>
                    <Row className='SystemTile'>
                        <Col offset={4} xl={18}>
                            <p className='English'>Masters System of</p>
                            <p className='English'>British Universities</p>
                            <p className='Chinese'>英国硕士体系</p>
                        </Col>
                    </Row>
                    <Row className="SystemContent">
                        <Col offset={4} xl={18} xxl={18}>
                            <p>
                                英国硕士主要分为授课型硕士与研究型硕士两种，前者是以上课教学为主，后者是以研究
                                为主，大多数国内的学生都是申请的授课型研究生。授课式硕士研究生需要上课，写作业，参与
                                考试。需要完成一篇Dissertation才能毕业，相当于国内的文学硕士（MA）或理学硕士（MSc）。
                                研究型硕士即为“预博士”，分为MPhil和MRes两种。MPhil和博士的申请条件是一样的，学制为
                                2年，一般情况下作为PhD的前期出现，如UCL的博士入学即为MPhil身份，18个月之后经
                                Upgrade转为正式博士。MRes一般只有理工科才有，小班授课，与MSc录取条件相似，在入学
                                后第一学期与MSc一起上课，第二学期转为研究与实验，毕业之后如希望继续攻读博士则需要
                                重新申请考核。
                            </p>
                            <p>
                                英国硕士每年9月份开学，至次年6月份上交毕业论文，12月获得学位证，为期一年。 
                            </p>
                        </Col>
                    </Row>
                    <Row className='SystemTile'>
                        <Col offset={4} xl={18}>
                            <p className='English'>Masters Entry Requirements</p>
                            <p className='Chinese'>英国硕士申请基本要求</p>
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
                <Col xl={12} className='Advantages'>
                    <Row>
                        <Col span={24}>
                            <Title className='English'>Why Choose Us</Title>
                            <p className='Chinese'>为什么选择BEC</p>
                        </Col>
                    </Row>
                    <Row>
                        {advantages.map((event, index) =>
                            <Col xl={20} key={index}>
                                <Title level={3} className='Title'>{event.key}</Title>
                                <Col xl={20}>
                                    <p><CheckCircleOutlined className='Icon'/>{event.description}</p>
                                </Col>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </Content>
        <BritanniaMasterCases/>
    </div>
  );
}

export default BritanniaMaster;
