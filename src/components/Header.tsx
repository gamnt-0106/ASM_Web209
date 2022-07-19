import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Col, Row } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { RocketOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
const Header = () => {
    return (
        <>
            <Row style={{backgroundColor:"red"}}>
                <Col span={8}> 
                <div className='' style={{margin:"10px" ,marginRight:"auto"}}>

                <Logo width={"20px"} src={logo} />
                </div>
                
                 </Col>
                <Col span={8} style={{margin:"auto"}}>
                <Input style={{borderRadius:"10px"}}placeholder="Search" prefix={<SearchOutlined /> } />
                </Col>
                <Col span={8}>
                    <Row style={{margin:"10px"}}>
                        <Col span={6} style={{color:"white"}}>Gọi mua hàng <br />1800.2097</Col>
                        <Col span={6} style={{color:"white"}}><EnvironmentOutlined />Cửa hàng <br /> gần bạn</Col> 
                        <Col span={6} style={{color:"white"}}><RocketOutlined />Tra cứu <br /> đơn hàng</Col>
                        <Col span={6} style={{color:"white"}}><ShoppingCartOutlined />Giỏ hàng</Col>
                    </Row>
                </Col>
            </Row>
        </>


    );
}
const Logo = styled.img`
width:65px ;
height: auto;
`


export default Header;