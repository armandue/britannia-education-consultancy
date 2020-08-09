import React from 'react';
import './BritanniaHomeTeam.css';
import { Row, Col } from 'antd';

import tan from '../../../../images/team/tan.p.williams.png';
import xie from '../../../../images/team/xie.yaoshu.png';
import cui from '../../../../images/team/cui.fan.png';
import yan from '../../../../images/team/yan.yuxuan.png';

function BritanniaHomeTeam() {
  return (
    <div className='BritanniaHomeTeam'>
      <Row>
        <Col span={24}>
          <img className='Head' src={tan} alt='CEO'/>
        </Col>
        <Col span={9}></Col>
        <Col span={6}>
            <p className='Title'>CEO：Tan P Williams</p>
            <p>博士毕业于考文垂大学艺术设计与教育，曾任职于考文垂大学“艺术与数码媒体科技”讲师，
                BEC公司创始人，文书部主管，负责BEC文书部以及公司全面工作。</p>
        </Col>
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={6}>
            <Row>
                <Col span={24}>
                    <img className='Head' src={xie} alt='CEO'/>
                </Col>
                <Col span={3}></Col>
                <Col span={18}>
                    <p className='Title'>博士申请部运营主管：谢耀枢</p>
                    <p>本科毕业于“985”“双一流”东南大学，于英国曼彻斯特大学获一等荣誉硕
                            士；东京大学计算材料学博士，获得日本文部省全额奖学金。具备丰富的学习和研究经验，善于解决学生博士
                            申请常遇到的学术难题。负责学生学业，职业规划及各项课程设计。BEC公司联合创始人。</p>
                </Col>
            </Row>
        </Col>
        <Col span={8}>
            <Row>
                <Col span={24}>
                    <img className='Head' src={cui} alt='CEO'/>
                </Col>
                <Col span={3}></Col>
                <Col span={18}>
                    <p className='Title'>硕士申请部运营主管：崔凡</p>
                    <p>本科毕业于“9 8 5”“双一流”中南大学，硕士毕业于英国曼彻斯特大学，
                            英国伦敦大学学院UCL电子电器学博士。熟悉英联邦大学体制，有丰富的择校经验，熟悉英国硕士申请面试
                            培训，负责学生硕士专业选择以及学生职业规划辅导。BEC公司联合创始人。</p>
                </Col>
            </Row>
        </Col>
        <Col span={6}>
            <Row>
                <Col span={24}>
                    <img className='Head' src={yan} alt='CEO'/>
                </Col>
                <Col span={3}></Col>
                <Col span={18}>
                    <p className='Title'>市场部运营主管：闫雨轩</p>
                    <p>本科硕士均毕业于“9 8 5”“双一流”西南交通大学，日本京都大学工学博士。负责BEC公司市场运营及推广。
                            负责学生博士申请面试以及科研指导，兼任博士申请tutor。BEC公司联合创始人。</p>
                </Col>
            </Row>
        </Col>
      </Row>
    </div>
  );
}

export default BritanniaHomeTeam;
