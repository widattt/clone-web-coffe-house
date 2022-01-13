import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Story from '../components/Story'


function StoryPage({props}) {
    return (
        <div>
            <Navbar bg={'white'} />
            <Story props={props} />
            <Footer />
        </div>
    )
}

export default StoryPage
