import React from 'react';
import { Layout, Row, Col, Typography, Table} from 'antd';

import './BritanniaAboutUs.css';

const { Content } = Layout;
const { Title } = Typography;
const advantages = [
  '团队所有成员均由博士组成，对学生的发展有更为准确和全面的认识，以辅导选择最合适学生的专业及研究方向，能正确引导学生选择适合自己的学业与职业规划方向。',
  '与英国知名高校讲师、 BBC、《卫报》媒体人密切合作，团队文书成员均为英语母语博士，为学生提供地道专业的申请文书。',
  '团队成员长期在海外学习及工作，留学工作经验丰富，了解掌握各国家及各高校最新情况，及时获得申请第一手资料。',
  '为学生提供提升科研与学习能力的培训课程，注重学生学术能力的培养，授课老师均为世界名校毕业博士。'
];

const tutor_columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '毕业学校',
    dataIndex: 'college',
  },
  {
    title: '博士专业方向',
    dataIndex: 'major',
  },
];

const tutors = [
  {key: 1, name: 'Dr Chan', college: '华威大学', major: '市场营销'},
  {key: 2, name: 'Dr Qu', college: 'LSE', major: '大数据分析'},
  {key: 3, name: 'Dr Han', college: 'LSE', major: '金融学'},
  {key: 4, name: 'Dr Ren', college: 'LSE', major: '市场营销'},
  {key: 5, name: 'Dr Wang', college: 'UCL', major: '语言学'},
  {key: 6, name: 'Dr Hu', college: 'UCL', major: '修辞学'},
  {key: 7, name: 'Dr Xie', college: 'UCL', major: '数学金融'},
  {key: 8, name: 'Dr Liu', college: 'UCL', major: '电子信息技术'},
  {key: 9, name: 'Dr Yu', college: 'UCL', major: '化学工程'},
  {key: 10, name: 'Dr Zhang', college: '剑桥大学', major: '生物化学'},
  {key: 11, name: 'Dr Yan', college: '京都大学', major: '桥梁工程'},
  {key: 12, name: 'Dr Wang', college: '京都大学', major: '环境学'},
  {key: 13, name: 'Dr Cui', college: '曼彻斯特大学', major: '石墨烯'},
  {key: 14, name: 'Dr Chen', college: '埃克塞特大学', major: '纳米技术'},
  {key: 15, name: 'Dr Chang', college: '利物浦大学', major: '高分子材料'},
  {key: 16, name: 'Dr Chueng', college: '贝尔法斯特女王大学', major: 'TESOL,语言学'},
  {key: 17, name: 'Dr Sun', college: '苏黎世联邦理工大学', major: '量子物理学'},
  {key: 18, name: 'Dr Ye', college: '北京航空航天大学', major: '航天材料'},
  {key: 19, name: 'Dr Shen', college: '北京大学', major: '管理学'},
  {key: 20, name: 'Dr Li', college: '北京大学', major: '应用化学'},
  {key: 21, name: 'Dr Xie', college: '东京大学', major: '计算材料学'},
];

const writer_columns = [
  {
    title: 'Affiliation',
    dataIndex: 'affiliation',
  },
  {
    title: 'Position',
    dataIndex: 'position',
  },
];

const writers = [
  {key: 1, affiliation: 'United Nations (UNESCO - International Bureau of Education)', position: 'Senior Liaison Officer'},
  {key: 2, affiliation: 'United Nations (WIPO - World Intellectual Property Organisation)', position: 'Senior Project Manager'},
  {key: 3, affiliation: 'Edinburgh University', position: 'Senior Lecturer'},
  {key: 4, affiliation: "King's College London", position: 'Research Fellow'},
  {key: 5, affiliation: 'University of Warwick', position: 'Reader'},
  {key: 6, affiliation: 'Loughborough University', position: 'Director of Research'},
  {key: 7, affiliation: 'Imperial College London', position: 'Lecturer'},
  {key: 8, affiliation: 'London School of Economics', position: 'Research Manager'},
  {key: 9, affiliation: 'University of St Andrews', position: 'Senior Lecturer'},
  {key: 10, affiliation: 'Durham University', position: 'Post-doc Researcher'},
  {key: 11, affiliation: 'University College London', position: 'Senior Lecturer'},
  {key: 12, affiliation: 'BBC (News)', position: 'Script Editor'},
  {key: 13, affiliation: 'BBC (News)', position: 'Journalist'},
  {key: 14, affiliation: 'The Guardian', position: 'Writer'},
  {key: 15, affiliation: 'The Guardian', position: 'Writer'},
];

function BritanniaAboutUs() {
  return (
    <div className='AboutUs'>
        <Content>
            <Row className='Company'>
              <Col offset={4} xl={16}>
                <Title level={1} className='Title'>巅峰英伦教育公司 <span className='Subtitle'>Britannia Education Consultancy Ltd.</span></Title>
              </Col>
            </Row>
            <Row>
              <Col xl={{span:13,offset:3}} xs={{span:22, offset:1}}>
                <p className='Description'>
                  <span className='Highlight'>BEC巅峰英伦</span>于2017年注册成立于伦敦，专注从事教育培训以及硕士、博士申请咨询等服务。公司采取“私人订制”、“多对一辅导”的模式，为计划留学的学生提供专业的留学咨询及培训服务。
                  我们坚持以优质的硕士申请与博士能力培养为中心，致力于推动留学服务质量“规范化”，注重在留学申请过程中各项能力的培养。
                </p>
              </Col>
              <Col xl={{span:13,offset:3}} xs={{span:22, offset:1}}>
                <p className='Description'>
                  团队成员全部来自世界名校博士，旨在以“PhD”的要求为学生提供专业、优质的服务，自创立至今，全部学员申请学校成功率达95%以上。
                </p>
              </Col>
              <Col xl={{span:13,offset:3}} xs={{span:22, offset:1}}>
                <p className='Description'>
                  BEC巅峰英伦将始终致力于推广先进的“标准化”教育理念，不仅是为了帮助学生进入理想的大学深造，更重要的是培养了学生不断适应海外教育的能力。
                </p>
              </Col>
            </Row>
            <Row className='CoreAdvantage'>
              <Col xl={{span:13,offset:3}} xs={{span:22, offset:1}}>
                <Title level={3} className='Title'>核心优势 <span className='Subtitle'>Core Advantages</span></Title>
              </Col>
            </Row>
            { advantages.map((advantage, i) =>
              <Row className='Advantage' key={i}>
                <Col xl={{span:1,offset:3}} xs={{span:2, offset:1}}>
                  <p className='Number'>{i + 1}</p>
                </Col>
                <Col xl={12} xs={20}>
                  <p className='Description'>
                    {advantage}
                  </p>
                </Col>
              </Row>
            )}
            <Row className='Team'>
              <Col xl={{span:9,offset:3}} xs={{span:23, offset:1}}>
                <Row>
                  <Col>
                    <Title level={3} className='Title'>学生导师<span className='Subtitle'> Tutor介绍 </span></Title>
                  </Col>
                </Row>
                <Row>
                  <Col xl={20} className='WriterList'>
                    <Table dataSource={tutors} columns={tutor_columns} pagination={false} size="small"/>
                  </Col>
                </Row>
              </Col>
              <Col xl={{span:9,offset:0}} xs={{span:23, offset:1}}>
                <Row>
                  <Col>
                    <Title level={3} className='Title'>写手团队<span className='Subtitle'> Our Writers & Proofreaders’ Background </span></Title>
                  </Col>
                </Row>
                <Row>
                  <Col xl={20} className='WriterList'>
                    <Table dataSource={writers} columns={writer_columns} pagination={false} size="small"/>
                  </Col>
                </Row>
              </Col>
            </Row>
        </Content>
    </div>
  );
}

export default BritanniaAboutUs;
