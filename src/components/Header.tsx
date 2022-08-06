import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import banner from '../assets/images/banner.png'
import { DashboardOutlined, DesktopOutlined, HomeOutlined, InsertRowLeftOutlined, LaptopOutlined, LoadingOutlined, MobileOutlined, PhoneOutlined, SearchOutlined, TabletOutlined, UsbOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Input, Layout, Menu, MenuProps } from 'antd';
import { Col, Row } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { RocketOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items = [
    getItem("Điện thoại", "sub1", <MobileOutlined />, []),
    getItem("Laptop", "sub2", <LaptopOutlined />, []),
    getItem("Máy tính bảng", "sub3", <TabletOutlined />, []),
    getItem("Âm thanh", "sub4", <PhoneOutlined />, []),
    getItem("Đồng hồ", "sub5", <DashboardOutlined />, []),
    getItem("Nhà thông minh", "sub6", <HomeOutlined />, []),
    getItem("Phụ kiện", "sub7", <UsbOutlined />, []),
    getItem("PC - Màn hình", "sub8", <DesktopOutlined />, []),
    getItem("Tivi", "sub9", <VideoCameraOutlined />, []),
    getItem("Hàng cũ", "sub11", <InsertRowLeftOutlined />, []),
    getItem("Tin công nghệ", "sub13", <LoadingOutlined />, []),
];

const onClick: MenuProps['onClick'] = e => {
    console.log('click', e);
};
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
            <Layout>
                <Layout style={{backgroundColor:"white"}}>
                    <Sider style={{
                        marginTop: "30px", marginLeft: "150px"
                    }}>
                        <Menu
                            onClick={onClick}
                            style={{
                                width: "250"
                            }}
                            items={items}
                        />
                    </Sider>
                    <Content style={{ marginTop: "30px" }}>
                        <Banner src={banner} />
                    </Content>
                </Layout>
            </Layout>
        </>


    );
}
const Logo = styled.img`
width:65px ;
height: auto;
`
const Banner = styled.img`
width:900px
`


export default Header;