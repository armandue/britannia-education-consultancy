import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';

import './BritanniaPhdCases.css';

import ucl_1 from '../../../../images/phd/ucl_1.jpg';
import ucl_2 from '../../../../images/phd/ucl_2.png';
import cambridge from '../../../../images/phd/cambridge.png';
import durham_university from '../../../../images/phd/durham_university.png';
import hongkong_polytechnic from '../../../../images/phd/hongkong_polytechnic.jpg';
import lancaster_university from '../../../../images/phd/lancaster_university.png';
import newcastle_university from '../../../../images/phd/newcastle_university.png';
import university_of_edinburgh from '../../../../images/phd/university_of_edinburgh.png';
import university_of_glasgow from '../../../../images/phd/university_of_glasgow.png';
import university_of_leeds_1 from '../../../../images/phd/university_of_leeds_1.png';
import university_of_leeds_2 from '../../../../images/phd/university_of_leeds_2.jpg';
import university_of_manchester_1 from '../../../../images/phd/university_of_manchester_1.jpg';
import university_of_manchester_2 from '../../../../images/phd/university_of_manchester_2.png';
import university_of_manchester_3 from '../../../../images/phd/university_of_manchester_3.jpg';
import university_of_sheffield from '../../../../images/phd/university_of_sheffield.png';
import university_of_sydeny from '../../../../images/phd/university_of_sydeny.png';
import university_of_bristol from '../../../../images/phd/university_of_bristol.png';
import nus from '../../../../images/phd/nus.png';
import all from '../../../../images/phd/all.png';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const cases = [
    { name: '伦敦大学学院', image: ucl_1 },
    { name: '伦敦大学学院', image: ucl_2 },
    { name: '剑桥大学', image: cambridge },
    { name: '杜伦大学', image: durham_university },
    { name: '香港理工大学', image: hongkong_polytechnic },
    { name: '兰卡斯特大学', image: lancaster_university },
    { name: '纽卡斯尔大学', image: newcastle_university },
    { name: '爱丁堡大学', image: university_of_edinburgh },
    { name: '格拉斯哥大学', image: university_of_glasgow },
    { name: '利兹大学', image: university_of_leeds_1 },
    { name: '利兹大学', image: university_of_leeds_2 },
    { name: '曼彻斯特大学', image: university_of_manchester_1 },
    { name: '曼彻斯特大学', image: university_of_manchester_2 },
    { name: '曼彻斯特大学', image: university_of_manchester_3 },
    { name: '谢菲尔德大学', image: university_of_sheffield },
    { name: '悉尼大学', image: university_of_sydeny },
    { name: '布里斯托大学', image: university_of_bristol },
    { name: '新加坡国立大学', image: nus },
]

function BritanniaPhdCases() {
  return (
    <div className='PhdCases'>
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
                    <img src={all} alt='PHD Offer 大合集'/>
                </Col>
            </Row>
        </Content>
    </div>
  );
}

export default BritanniaPhdCases;
