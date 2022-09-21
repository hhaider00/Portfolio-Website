import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () =>
{ 
    
    var about = "About Me"
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => { setTimeout(() => { setLetterClass('text-animate-hover')}, 3000)},[])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={about.split("")} index={15}/>
                </h1>
                <p>
                    During my time at university I made many projects not only as part of my degree but also
                    in my free time.
                </p>
                <p>This allowed my to become proficient in a few core languages used in the industry.</p>
                <p>These include: Java,C#,Javascript and Python, While also becoming competent in C and C++.</p>
                <p>
                    Furthermore I have learned a few popular frameworks. Such as:
                    Nodejs, Discordjs, Tensorflow, Sklearn, Mocha (Javascript testing), react and uniy game
                    engine.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'> 
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031"></FontAwesomeIcon>

                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>

                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>

                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>

                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"></FontAwesomeIcon>

                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"></FontAwesomeIcon>

                </div>
                
                </div>

            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple"/>
        </>
    )

}

export default About