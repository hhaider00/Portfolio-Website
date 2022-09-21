import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { getDocs, collection } from 'firebase/firestore/lite';
import { db } from '../../firebase';
const Portfolio = () =>
{
    var title = "Portfolio"
    const [letterClass, setLetterClass] = useState('text-animate')
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => { setTimeout(() => { setLetterClass('text-animate-hover')}, 6000)},[])

    useEffect(() => {
        getPorfolio();
    },[]);
    const getPorfolio = async () =>
    {
        const querySnapShot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapShot.docs.map((doc) => doc.data()));
        
    }

    const renderPortfolio = (portfolio) =>
    {
        return(
            <div className="images-container">
                {
                    portfolio.map((port,index) => {
                        return(
                            <div className="image-box" key={index}>
                                <img className="portfolio-image" src={port.image} alt="portfolio"/>
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="button" onClick={() => window.open(port.url)}>Veiw</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
    return(
        <>
         
        <div className="container portfolio-page">
           
            <h1 className="page-title">
                <AnimatedLetters  index={15} strArray={title.split("")} letterClass={letterClass}/>
            </h1>
            <div>{renderPortfolio(portfolio)}</div>
        </div>
       
        <Loader type="ball-scale-ripple-multiple"/>
        </>
    );
}

export default Portfolio;