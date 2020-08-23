import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

import './BritanniaMasterFaq.css';
import BritanniaMasterFaqItem from './item/BritanniaMasterFaqItem';

const { Content } = Layout;
const { Title } = Typography;

const faq = [
    {
        question: '',
        answer: '准备材料：成绩单，PS，CV，雅思成绩单，Career Plan，2 封推荐信，实习证明，GRE/GMAT 成绩单，考证（例：ACCA，CFA）'
    },
    {
        question: '我想转专业（理工科转商科），该怎么选择专业方向？',
        answer: '并不是所有的专业都适合转，个别专业的申请会要求申请人具备相关专业背景。总体来说，理科转工科易，理工科转文社科易，反之则难。如果没有相关背景，准备与所转专业相关的实习会为转专业提供优势。'
    },
    {
        question: '成绩要达到多少才能申请G5？',
        answer: '国内 “985” “211” 本科要达到 85+，双非至少要达到 87+。英国本科至少要达到 2.1 学位。'
    },
    {
        question: '申请多个专业用一份文书可以吗？',
        answer: '严格意义上不可以，每一个申请的专业都会在文书上表达不同的要求，如果全部申请都用一份文书，则会给审核人“文不符题”的感觉，导致申请不成功。'
    },
    {
        question: '文书PS等会查重吗？',
        answer: '没有大学官方要求文书查重，但是随着英国留学越来越热门，尤其是中国申请人增长越来越快，很多大学开始逐步在学院内自行通过 Turnitin 查重，这就意味着模板化的文书越来越行不通。'
    },
    {
        question: 'GMAT/GRE对申请有帮助吗？',
        answer: '非常有帮助。如果要申请商科背景的专业，一个好的 GMAT 分数基本是在哪里都会为你的申请增添分量。许多大学在入学要求中标明：“GMAT/GRE is recommended but not required, but a good results may weight your application.” 言外之意就是有成绩会更佳。'
    },
    {
        question: '申请专业需要面试吗？会提供面试培训吗？',
        answer: '商科专业基本都需要面试，牛津剑桥需要 face to face 面试，UCL，IC的许多商科专业采取线上面试。其他专业视学校要求而定。'
    },
    {
        question: '英国硕士最佳申请时间是什么时候？',
        answer: '一般来讲在8月份之前准备好申请材料即可，但是刚开始的准备工作往往比较繁琐，包括择校，选专业，考雅思等等，建议在英国大二下半学年结束（国内大三下半学年）的六七月份就开始提早准备文书。'
    },
    {
        question: '英国硕士什么时间开放申请？什么时间提交申请比较合理？',
        answer: '大部分大学在当年9月份就会逐渐开放申请，如 UCL，IC 等要等到十月中旬。牛津剑桥，UCL，IC，LSE 等大学往往有多轮录取，如LSE采取 rolling admissions 模式，申请截止时间均在次年6月至8月。'
    },
]

function BritanniaMasterFap() {
  return (
    <div className='MasterFaq'>
        <Content>
            <Row>
                <Col xl={12}>
                    <Row className='Title'>
                        <Col offset={4} xl={18}>
                            <Title className='English'>Masters Application FAQ</Title>
                            <Title level={3} className='Chinese'>硕士申请准备材料与常见问题与误区</Title>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={{span:12, offset:0}} xs={{span:22, offset:1}}>
                    {faq.slice(0, 5).map((item, i) =>
                        <BritanniaMasterFaqItem item={item} key={i}/>
                    )}
                </Col>
                <Col xl={{span:12, offset:0}} xs={{span:22, offset:1}}>
                    {faq.slice(5).map((item, i) =>
                        <BritanniaMasterFaqItem item={item} key={i}/>
                    )}
                </Col>
            </Row>
        </Content>
    </div>
  );
}

export default BritanniaMasterFap;
