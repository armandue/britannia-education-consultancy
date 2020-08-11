import React from 'react';
import './BritanniaHomeContact.css';
import { Row, Col } from 'antd';

import BritanniaHomeContactDetail from './detail/BritanniaHomeContactDetail';
import qrCode from '../../../../images/QR_code.png';

const contacts = [
    {
        title: 'CEO',
        name: 'Tan P Williams',
        email: 'tan.williams@becedu.co.uk',
    },
    {
        title: '博士申请部运营主管',
        name: 'Jason Xie',
        email: 'Jason.xie@becedu.co.uk',
    },
    {
        title: '硕士申请部运营主管',
        name: 'Fan Cui',
        email: 'fan.cui@becedu.co.uk',
    },
    {
        title: '市场部运营主管',
        name: 'Cassie Yan',
        email: 'cassie.yan@becedu.co.uk',
    },
];

function BritanniaHomeContact() {
  return (
    <div className='Contact'>
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={24} className='Title'>
                        <p>
                            联系我们
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='Title'>
                        <p>
                            CONTACT US
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className='Info'>
            <Col span={5}></Col>
            <Col span={9}>
                <p>英国，伦敦总部</p>
                <p>Tel：+44 20 8694 0740</p>
                <p><a href="mailto:info@becedu.co.uk">Email：info@becedu.co.uk</a></p>
                <p><span className='BottomLine'>Address: 243 Glenville Grove, London, SE8 4BT, United Kingdom</span></p>
                <p className='QRCode'>申请咨询请加小客服微信:</p>
                <p>(添加客服微信二维码)</p>
                <img className='QRImage' src={qrCode} alt='QR Code'/>
            </Col>
            <Col span={5}>
                {contacts.map((contact, i) =>
                    <BritanniaHomeContactDetail key={i} detail={contact}/>
                )}
            </Col>
        </Row>
    </div>
  );
}

export default BritanniaHomeContact;
