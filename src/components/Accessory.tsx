import { List } from 'antd'
import React from 'react'
import styled from 'styled-components';
import imageProduct from '../assets/images/pk3.png';
import pk1 from '../assets/images/pk1.png';
import pk4 from '../assets/images/pk4.png';
import pk5 from '../assets/images/pk5.png';
import pk6 from '../assets/images/pk6.png';
import pk7 from '../assets/images/pk7.png';
import pk8 from '../assets/images/pk8.png';
import pk9 from '../assets/images/pk9.png';
import pk10 from '../assets/images/pk10.png';
import pk11 from '../assets/images/pk11.png';
type Props = {}

const Accessory = (props: Props) => {
      const data = [
        {
            title: 'Title 1',
            image :pk1
        },
        {
            title: 'Title 2',
            image:imageProduct
            
        },
        {
            title: 'Title 3',
            image:pk4
        },
        {
            title: 'Title 4',
            image:pk5
        },
        {
            title: 'Title 4',
            image:pk6
        },
        {
            title: 'Title 4',
            image:pk7
        },
        {
            title: 'Title 4',
            image:pk8
        },
        {
            title: 'Title 4',
            image:pk9
        },
        {
            title: 'Title 4',
            image:pk10
        },
        {
            title: 'Title 4',
            image:pk11
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 4',
        }
    ];
  return (

    <div >
    <Title>PHỤ KIỆN</Title>
    <List 
        grid={{
            gutter: 10,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 10,
            xxl: 10,
        }}
        
        dataSource={data} 
        renderItem={(item:any) => (
            <List.Item >
                
                <div>
                    <div style={{textAlign:"center"}}>
                        <PhuKien href="" ><img  src={item.image} alt="" width={100} style={{width:"100%"}} /> </PhuKien>
                        {/* <NamePhuKien className='title'>Nổi bật</NamePhuKien> */}
                       
                    </div>
                </div>
            </List.Item>
        )}
    />
</div>
  )
}
const Title = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-top: 10px;
`
const PhuKien = styled.a`
    position: relative;

`
const NamePhuKien = styled.div`
    position: absolute;
    color: #fff;
    margin: auto;
    top: 3%;
    left: 12%;
   /* left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto; */
`  
export default Accessory