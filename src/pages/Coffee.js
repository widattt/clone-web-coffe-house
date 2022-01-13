import React from 'react'
import CommonContainer from '../components/CommonContainer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { dataCoffee } from '../dataCoffee'

function Coffee() {
    
    return (
        <div>
            <Navbar />
            <CommonContainer props={dataCoffee} />
            <Footer />
        </div>
    )
}

export default Coffee
