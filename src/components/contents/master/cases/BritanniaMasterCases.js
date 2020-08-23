import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';

import './BritanniaMasterCases.css';

import ucl_1 from '../../../../images/master/ucl_1.jpg';
import ucl_2 from '../../../../images/master/ucl_2.jpg';
import ucl_3 from '../../../../images/master/ucl_3.png';
import ucl_4 from '../../../../images/master/ucl_4.jpg';
import ucl_5 from '../../../../images/master/ucl_5.jpg';
import ucl_6 from '../../../../images/master/ucl_6.jpg';
import imperial_college_london_1 from '../../../../images/master/imperial_college_london_1.png';
import imperial_college_london_2 from '../../../../images/master/imperial_college_london_2.png';
import imperial_college_london_3 from '../../../../images/master/imperial_college_london_3.jpg';
import imperial_college_london_4 from '../../../../images/master/imperial_college_london_4.jpg';
import kings_college_london_1 from '../../../../images/master/kings_college_london_1.jpg';
import kings_college_london_2 from '../../../../images/master/kings_college_london_2.jpg';
import oxford from '../../../../images/master/oxford.jpg';
import university_of_bath from '../../../../images/master/university_of_bath.png';
import university_of_edinburgh from '../../../../images/master/university_of_edinburgh.jpg';
import university_of_manchester from '../../../../images/master/university_of_manchester.jpg';
import university_of_st_andrew from '../../../../images/master/university_of_st_andrew.jpg';
import unversity_of_leeds from '../../../../images/master/unversity_of_leeds.jpg';

import all from '../../../../images/master/all.jpg';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const cases = [
    { name: '伦敦大学学院', image: ucl_1 },
    { name: '伦敦大学学院', image: ucl_2 },
    { name: '伦敦大学学院', image: ucl_3 },
    { name: '伦敦大学学院', image: ucl_4 },
    { name: '伦敦大学学院', image: ucl_5 },
    { name: '伦敦大学学院', image: ucl_6 },
    { name: '爱丁堡大学', image: university_of_edinburgh },
    { name: '利兹大学', image: unversity_of_leeds },
    { name: '伦敦帝国理工学院', image: imperial_college_london_1 },
    { name: '伦敦帝国理工学院', image: imperial_college_london_2 },
    { name: '伦敦帝国理工学院', image: imperial_college_london_3 },
    { name: '伦敦帝国理工学院', image: imperial_college_london_4 },
    { name: '曼彻斯特大学', image: university_of_manchester },
    { name: '伦敦国王学院', image: kings_college_london_1 },
    { name: '伦敦国王学院', image: kings_college_london_2 },
    { name: '牛津大学', image: oxford },
    { name: '巴斯大学', image: university_of_bath },
    { name: '圣安德鲁大学', image: university_of_st_andrew },
]

function BritanniaMasterCases() {
  return (
    <div className='MasterCases'>
        <Content>
            <Row>
                <Col xl={12}>
                    <Row className='Title'>
                        <Col offset={4} xl={18}>
                            <Title className='English'>SUCCESSFUL CASES</Title>
                            <Title level={3} className='Chinese'>成功案例展示</Title>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col offset={2} xl={22} xxl={20}>
                    <Row>
                        {cases.map((item, i) =>
                            <Card
                                className='Case'
                                key={i}
                                hoverable
                                style={{ width: 260 }}
                                cover={<img alt={item.name} src={item.image} />}>
                                <Meta title={<span className='Title'>{item.name}</span>}/>
                            </Card>
                        )} 
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col offset={3} xxl={20} span={0}>
                    <img src={all} alt='Master Offer 大合集'/>
                </Col>
            </Row>
        </Content>
    </div>
  );
}

export default BritanniaMasterCases;
