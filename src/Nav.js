import React, { useEffect, useState } from "react";
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

function Nav(){
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    const transitioNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitioNavBar);
        return () => window.removeEventListener("scroll", transitioNavBar);
    }, []);
    return(
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img
                    onClick={() => navigate('/')}
                    className='nav_logo'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix logo"
                />
                <img
                    onClick={() => navigate('/profile')}
                    className='nav_avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
                    alt='Netflix logo'
                />
            </div>
        </div>
    )
}

export default Nav