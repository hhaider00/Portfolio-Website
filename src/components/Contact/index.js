import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => 
{
    var title = "Contact Me"
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => { setTimeout(() => { setLetterClass('text-animate-hover')}, 3000)},[])
    const refForm = useRef()
    const sendEmail = (e) =>
    {
        e.preventDefault()

        emailjs.sendForm('default_service', 'template_g1wyr9e' , refForm.current, 't-hez9OajYjOwVwA2')
        .then(
            () => {
                alert('Message sent!')
                window.location.reload(false)
            },
            ()=>{
                alert('Message not sent!')
                
            }
        )
        
        
    }
    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={title.split("")} index={15} />
                </h1>
                <p>
                    For any inquires feel free to contact me using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                        <li className='helf'>
                            <input type="text" name="name" placeholder="Name" required/>

                        </li>
                        <li className='helf'>
                            <input type="email" name="email" placeholder="Email" required/>

                        </li>
                        <li>
                            <input placeholder="Enquiry" type="text" name="subject" required/>
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required ></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Send"/>
                        </li>
                        </ul>
                    </form>

                </div>

                

            </div>
            <div className='info-map'>
                    I graduated from the University of east anglia (uea)

                    
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[52.6221, 1.2411]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[52.6221, 1.2411]}>
                            <Popup>This is the University i graduated at</Popup>
                        </Marker>
                    </MapContainer>
                </div>
        </div>
        <Loader type="ball-scale-ripple-multiple"/>
        </>
    )
}

export default Contact