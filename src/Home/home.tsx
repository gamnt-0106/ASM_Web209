import React from 'react'
import Accessory from '../components/Accessory'
import Banner from '../components/Banner'
import ComputerAccessory from '../components/ComputerAccessory'
import Sidebar from '../components/Sidebar'
import ListProduct from '../Home/list'

const Home = () => {
    return (
        <div>
            <section style={{ width: "80%", margin: "10px auto", display: "flex", }}>
                <Sidebar />
                <Banner />

            </section>

            <section style={{ width: "90%", margin: "30px auto" }}>
                <ListProduct />
            </section>

            <section style={{ width: "80%", margin: "30px auto" }}>
                <Accessory />
            </section>
            <section style={{ width: "80%", margin: "30px auto" }}>
                <ComputerAccessory />
            </section></div>
    )
}

export default Home