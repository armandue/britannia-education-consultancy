import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

import './BritanniaAboutUs.css';

const { Content } = Layout;
const { Title } = Typography;
const advantages = [
  '团队所有成员均由博士组成，对学生的发展有更为准确和全面的认识，以辅导选择最合适学生的专业及研究方向，能正确引导学生选择适合自己的学业与职业规划方向。',
  '与英国知名高校讲师、 BBC、《卫报》媒体人密切合作，团队文书成员均为英语母语博士，为学生提供地道专业的申请文书。',
  '团队成员长期在海外学习及工作，留学工作经验丰富，了解掌握各国家及各高校最新情况，及时获得申请第一手资料。',
  '为学生提供提升科研与学习能力的培训课程，注重学生学术能力的培养，授课老师均为世界名校毕业博士。'
];

function BritanniaAboutUs() {
  return (
    <div className='AboutUs'>
        <Content>
            <Row className='Company'>
              <Col offset={4} span={16}>
                <Title level={1} className='Title'>巅峰英伦教育公司 <span className='Subtitle'>Britannia Education Consultancy Ltd.</span></Title>
              </Col>
            </Row>
            <Row>
              <Col offset={3} span={13}>
                <p className='Description'>
                  <span className='Highlight'>BEC巅峰英伦</span>于2017年注册成立于伦敦，专注从事教育培训以及硕士、博士申请咨询等服务。公司采取“私人订制”、“多对一辅导”的模式，为计划留学的学生提供专业的留学咨询及培训服务。
                  我们坚持以优质的硕士申请与博士能力培养为中心，致力于推动留学服务质量“规范化”，注重在留学申请过程中各项能力的培养。
                </p>
              </Col>
              <Col offset={3} span={13}>
                <p className='Description'>
                  团队成员全部来自世界名校博士，旨在以“PhD”的要求为学生提供专业、优质的服务，自创立至今，全部学员申请学校成功率达95%以上。
                </p>
              </Col>
              <Col offset={3} span={13}>
                <p className='Description'>
                  BEC巅峰英伦将始终致力于推广先进的“标准化”教育理念，不仅是为了帮助学生进入理想的大学深造，更重要的是培养了学生不断适应海外教育的能力。
                </p>
              </Col>
            </Row>
            <Row className='CoreAdvantage'>
              <Col offset={3} span={16}>
                <Title level={3} className='Title'>核心优势 <span className='Subtitle'>Core Advantages</span></Title>
              </Col>
            </Row>
            { advantages.map((advantage, i) =>
              <Row className='Advantage' key={i}>
                <Col offset={3} span={1}>
                  <p className='Number'>{i + 1}</p>
                </Col>
                <Col span={12}>
                  <p className='Description'>
                    {advantage}
                  </p>
                </Col>
              </Row>
            )}
            
        </Content>
    </div>
  );
}

export default BritanniaAboutUs;
