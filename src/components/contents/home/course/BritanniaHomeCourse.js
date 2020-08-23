import React from 'react';
import './BritanniaHomeCourse.css';
import { Row, Col } from 'antd';

import course1 from '../../../../images/course/course_1.png';
import course2 from '../../../../images/course/course_2.png';
import course3 from '../../../../images/course/course_3.png';
import course4 from '../../../../images/course/course_4.png';

function BritanniaHomeCourse() {
  return (
    <div className='Course'>
        <Row>
            <Col xl={3} xxl={5} xs={1}></Col>
            <Col xl={19} xs={22}>
                <Row>
                    <Col xl={8} xs={24} className='Title'>
                        <Row>
                            <Col span={7} className='Subtitle'>
                                <p>线<br/>上<br/>课<br/>程</p>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={15} className='CourseList'>
                                <p className='CourseName'>英国硕士申请技巧</p>
                                <p className='CourseName'>英国博士申请技巧</p>
                                <p className='CourseName'>英国学术圈资讯</p>
                                <p className='CourseName'>学术论文写作技巧</p>
                                <p className='CourseName'>学术技能干货分享</p>
                                <p className='CourseName'>学习技能分享</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className='Description'>
                                <p>每期线上课程我们都会邀请到世界著名大学博士作为嘉宾，与大家分享学习技巧与实用技能，以及申请过程中会遇到的一些问题。讲座全年开授，名校博士现场答疑。</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={16} xxl={13} className='Display'>
                        <Row>
                            <Col span={1}></Col>
                            <Col xl={11} xxl={8} xs={0}>
                            <img className='CourseCase FirstLine' src={course1} alt='如何在硕士阶段规划Phd申请'/>
                            </Col>
                            <Col xl={11} xxl={8}>
                                <p className='CaseShow'>CONTENT THEME</p>
                                <p className='CaseShow'>DISPLAY</p>
                                <p className='CaseShow'>内容主题展示</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={1}></Col>
                            <Col xl={11} xxl={8}>
                                <img className='CourseCase' src={course2} alt='申请Phd时间节点与申请过程中的问题'/>
                            </Col>
                            <Col xl={11} xxl={8}>
                                <img className='CourseCase' src={course3} alt='如何选择自己的研究方向'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12} xxl={9}></Col>
                            <Col xl={11} xxl={8}>
                                <img className='CourseCase' src={course4} alt='2021 fall 硕士申请季分析以及申请中的一些重要问题'/>
                            </Col>
                        </Row>             
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  );
}

export default BritanniaHomeCourse;
