import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';
import {motion} from "framer-motion"
const Contact = () => {
    const pageTransition = {
        in: {
            opacity : 1,
            x: 0,            
        },
        out: {
            opacity: 0,
            x: 200,
        },
    };
    return (
     <main>
        <Mouse />
        <motion.div className="contact" initial="out" animate="in" exit="out" variants={pageTransition} transition={{duration: 0.3}}>
            <Navigation />
            <Logo />
            <ContactForm />
            <div className="contact-infos">
                <div className="address">
                    {/* <div className="content">
                        <h4>adresse</h4>
                        <p>33000 Bordeaux</p>
                    </div> */}
                </div>
                <div className="phone">
                    <div className="content">
                        <h4>téléphone :</h4>
                        <CopyToClipboard text="063410640" className="hover"> 
                        <p style={{cursor : "pointer"}} className='clipboard' onClick={() => alert("Téléphone copié !")}>06 34 16 06 40</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="email">
                    <div className="content">
                        <h4>email :</h4>
                        <CopyToClipboard text="delattre.t.pro@gmail.com" className="hover"> 
                        <p style={{cursor : "pointer"}} className='clipboard' onClick={() => alert("Email copié !")}>delattre.t.pro@gmail.com</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <SocialNetwork />
                <div className="credits">
                    <p>From Thomas - 2023</p>
                </div>
            </div>
            <Buttons  left={"/projet-4"}/>
        </motion.div>
     </main>
    );
};

export default Contact;