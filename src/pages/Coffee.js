import React from 'react'
import CommonContainer from '../components/CommonContainer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { dataCoffee } from '../dataCoffee'

function Coffee() {
    const title = 'Cà phê tại nhà'
    return (
        
        <div>
            <Navbar />
            <CommonContainer props={{dataCoffee,title}} />
            <Footer />
        </div>
    )
}

export default Coffee
