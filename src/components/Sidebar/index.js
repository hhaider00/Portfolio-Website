import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Logo-S-H.png'
import LogoSubtitle from '../../assets/images/Logo_Sub_H.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => 
{
    const [showNav, setShowNav] = useState(false);

    
return(
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>

    </Link>
    <nav className={showNav? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={()=>setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={()=>setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={()=>setShowNav(false)}>
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
        <FontAwesomeIcon 
        onClick={()=>setShowNav(false)}
        icon={faClose}
        color="#ffd700"
        size="3x"
        className='close-icon'
        />
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/hamza-haider-ba90a0222/'>
                <FontAwesomeIcon icon={faLinkedin} color= '#4d4d4e' />
            </a>
        </li>

        <li>
            <a target="_blank" rel='noreferrer' href='https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1CHBF_en-GBGB864GB864&oq=gog&aqs=chrome.2.69i57j46i199i465i512j46i10i131i199i433i465j0i10i131i433l2j0i10j0i10i131i433l2j46i512j0i271.1687j0j7&sourceid=chrome&ie=UTF-8'>
                <FontAwesomeIcon icon={faGithub} color= '#4d4d4e' />
            </a>
        </li>
    </ul>
    <FontAwesomeIcon
    onClick={()=>setShowNav(true)} 
    icon={faBars}
    color="#ffd700"
    size="3x"
    className='hamburger-icon'
    />
</div>
)
}

export default Sidebar