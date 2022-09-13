import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Logo-S-H.png'
import LogoSubtitle from '../../assets/images/Logo_Sub_H.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => 
(
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>

    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
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
</div>
)

export default Sidebar