
import React from 'react'

// Components
import Header from '../components/Header'
import Ranking from '../components/Ranking'
import Footer from '../components/Footer'


const PageRanking = () => (
    <React.Fragment>
        <Header />
        <div className="bg-white ml-4 mr-4 mt-5 shadow fs-20">
            <Ranking />
        </div>
        <Footer styles="absolute"/>
    </React.Fragment>
)

export default PageRanking