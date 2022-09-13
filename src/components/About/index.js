import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () =>
{ 
    
    var about = "about me"
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => { setTimeout(() => { setLetterClass('text-animate-hover')}, 3000)},[])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={about.split("")} index={15}/>
                </h1>
                <p></p>
                <p></p>
                <p></p>
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