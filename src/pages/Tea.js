import React from 'react'
import CommonContainer from '../components/CommonContainer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { dataTea } from '../dataTea'

function Tea() {
    const title = 'Trà tại nhà'
    return (
        <div>
            <Navbar />
            <CommonContainer props={{dataTea,title}} />
            <Footer />
        </div>
    )
}

export default Tea
