import React from 'react'
import CommonContainer from '../components/CommonContainer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { dataTea } from '../dataTea'

function Tea() {
    
    return (
        <div>
            <Navbar />
            <CommonContainer props={dataTea} />
            <Footer />
        </div>
    )
}

export default Tea
