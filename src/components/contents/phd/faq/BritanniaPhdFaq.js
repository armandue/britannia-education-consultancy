import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

import './BritanniaPhdFap.css';
import BritanniaPhdFaqItem from './item/BritanniaPhdFaqItem';

const { Content } = Layout;
const { Title } = Typography;

const faq = [
    {
        question: '我适合读博士吗？',
        answer: '读博是比较枯燥且专一的事情。如果你有对学术的热情和追求，有定力，有较强的学习能力，你一定适合读博。读博会给你带来很多东西，比如能给你提供优秀的科研平台，带给你优秀的学习和解决问题的能力，以及科研成果带来的成就感。'
    },
    {
        question: '硕士期间的研究方向会影响到博士专业的选择吗？',
        answer: '硕士研究方向直接影响到博士的专业方向，导师会倾向于选择硕博方向一致的申请人，这样在学术上更具有连贯性。'
    },
    {
        question: '英国大学奖学金好拿吗？',
        answer: '在英国工程类学科比文科商科要容易拿奖学金，而且有“中国国家留学基金委” CSC 奖学金可以申请，各个大学也有很多自己的奖学金可以申请。'
    },
    {
        question: '英国博士入学时间有限制吗？',
        answer: '除一部分学校以外，许多大学都不会限制入学时间，全年均可入学。'
    },
    {
        question: '什么时间段套词比较好？',
        answer: '一般英国硕士第一学期结束就可以开始准备，申请人在次年6月份上交毕业论文之后就可以开始进行套词。'
    },
    {
        question: '申请英国博士看重有无论文发表吗？',
        answer: '如果你硕士毕业于英国大学，因为英国硕士学制只有一年，大多数申请者都没有发表过论文，所以英国导师对英国硕士毕业生入学前有无学术论文发表要求并不高。如果你硕士毕业于国内大学，论文的质量和数量还是很重要的。'
    },
    {
        question: 'Research Proposal 重要吗？',
        answer: '对于理工科申请人来说不是非常重要，前期套词不需要准备RP，导师更看重的是申请人是否具有科研能力和潜能，所以申请人的成绩和面试表现就非常重要。对于文科商科等社会学科来说，一份完整且优秀的RP直接代表了申请人的研究思路和写作能力，所以RP的作用就非常重要。'
    },
    {
        question: '我在博士申请之前要做什么准备？',
        answer: '大量的阅读相关文献是必不可少的，对所申请的领域必须有初步的认知。本科硕士时期学习到的东西也要认真复习，因为面试的时候导师会提问申请人学过的项目来考察申请人基础知识是否扎实牢固。'
    },
    {
        question: '授课型硕士毕业与研究型硕士有什么区别？',
        answer: '授课型硕士一样可以直接申请英国或者其他国家的博士，与其他硕士类型没有区别。英国研究型硕士可以直升博士，但是也要经过考核，授课型硕士在这方面没有本质区别，一样可以申请博士。'
    },
]

function BritanniaPhdFap() {
  return (
    <div className='PhdFaq'>
        <Content>
            <Row>
                <Col xl={12}>
                    <Row className='Title'>
                        <Col offset={4} xl={18}>
                            <Title className='English'>PhD Application FAQ</Title>
                            <Title level={3} className='Chinese'>博士申请常见问题与误区</Title>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    {faq.slice(0, 5).map((item, i) =>
                        <BritanniaPhdFaqItem item={item} key={i}/>
                    )}
                </Col>
                <Col xl={12}>
                    {faq.slice(5).map((item, i) =>
                        <BritanniaPhdFaqItem item={item} key={i}/>
                    )}
                </Col>
            </Row>
        </Content>
    </div>
  );
}

export default BritanniaPhdFap;
